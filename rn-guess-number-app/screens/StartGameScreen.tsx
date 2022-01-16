import { FC, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/color";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
interface Iprops {
  startGameHandler: any;
}
const StartGameScreen: FC<Iprops> = ({ startGameHandler }) => {
  const [enteredValue, setenteredValue] = useState<string | number>();
  const [userConfirm, setuserConfirm] = useState<boolean>(false);
  const [selectedNumber, setselectedNumber] = useState<null | number>(null);
  const [buttonwidth, setbuttonwidth] = useState(
    Dimensions.get("window").width / 4
  );
  const numberInputHandler = (inputText: string) => {
    //Validation
    setenteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHnalder = () => {
    setenteredValue("");
    setuserConfirm(false);
    setselectedNumber(null);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue as string);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number  has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHnalder,
          },
        ]
      );
      return;
    }
    setuserConfirm(true);
    setselectedNumber(chosenNumber);
    setenteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (userConfirm) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => startGameHandler(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  const updateLayout = () => {
    setbuttonwidth(Dimensions.get("window").width / 4);
  };
  useEffect(() => {
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <Text style={styles.title}> the Game Screen!</Text>
            <Card style={styles.inputContainer}>
              <BodyText>Select a Number</BodyText>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={{ width: buttonwidth }}>
                  <Button
                    title="Reset"
                    onPress={resetInputHnalder}
                    color={Colors.primary}
                  />
                </View>
                <View style={{ width: buttonwidth }}>
                  <Button
                    title="Confirm"
                    onPress={confirmInputHandler}
                    color={Colors.accent}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: "80%",
    minWidth: 300,
    maxWidth: "95%",
    alignItems: "center",
  },
  button: {
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    elevation: 5,
  },
  input: {
    width: 50,
    color: "#000000",
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
