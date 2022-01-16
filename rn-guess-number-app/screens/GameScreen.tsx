import { FC, useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import { Ionicons } from "@expo/vector-icons";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";

const renderListItem = (value: number, id: number) => {
  return (
    <View key={id} style={styles.listItem}>
      <BodyText># {value}</BodyText>
    </View>
  );
};
const generateRandomBeetween = (
  min: number,
  max: number,
  exclude: number | null
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBeetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

interface Iprops {
  userChoise: number | null;
  onGameOver: any;
}
const GameScreen: FC<Iprops> = ({ userChoise, onGameOver }) => {
  const [currrentGuess, setcurrrentGuess] = useState<number>(
    generateRandomBeetween(1, 100, userChoise)
  );
  const [rounds, setrounds] = useState(0);
  const currentLow = useRef<number>(1);
  const currentHigh = useRef<number>(100);
  const [pastGuessess, setpastGuessess] = useState<number[]>([currrentGuess]);
  const nextGuessHandler = (direction: "LOWER" | "GREATER") => {
    if (
      (direction === "LOWER" && currrentGuess < (userChoise as number)) ||
      (direction === "GREATER" && currrentGuess > (userChoise as number))
    ) {
      Alert.alert("Dont lie!", "Wrong guess", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "LOWER") {
      currentHigh.current = currrentGuess;
    } else {
      currentLow.current = currrentGuess;
    }

    const nextNumber = generateRandomBeetween(
      currentLow.current,
      currentHigh.current,
      currrentGuess
    );
    setcurrrentGuess(nextNumber);
    setrounds((current) => current + 1);
    setpastGuessess((current) => [nextNumber, ...current]);
  };

  useEffect(() => {
    if (currrentGuess === userChoise) {
      onGameOver(pastGuessess.length);
    }
  }, [currrentGuess, userChoise, onGameOver]);
  return (
    <View style={styles.screen}>
      <Text>Oppent Guess</Text>
      <NumberContainer>{currrentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler("LOWER")}>
          <Ionicons name="md-remove" size={24} />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("GREATER")}>
          <Ionicons name="md-add" size={24} />
        </MainButton>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuessess?.map((guess, id) => renderListItem(guess, id))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  list: {
    flex: 1,
    width: "80%",
  },
  listItem: {
    borderColor: "black",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "gray",
    flexDirection: "row",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
export default GameScreen;
