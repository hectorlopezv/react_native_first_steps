import { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/color";
interface Iprops {
  rounds: number;
  userNumber: number;
  startNewGame: any;
}
const GameOver: FC<Iprops> = ({ rounds, userNumber, startNewGame }) => {
  return (
   
      <ScrollView>
        <View style={styles.screen}>
          <Text>The Game is Over!</Text>
          <View style={styles.cpntainer}>
            <Image
              source={require("../assets/success.png")}
              style={styles.imgContainer}
              resizeMode="cover"
            />
          </View>
          <Text numberOfLines={1} ellipsizeMode="tail">
            This text will never wrap into a new line, instead it will be cut
            off like this if it is too lon...
          </Text>
          <BodyText>
            Your phone needed <Text style={styles.highLigth}>{rounds} </Text>
            roundss to guees the number
            <Text style={styles.highLigth}>{userNumber} </Text>
          </BodyText>
          <Button title="NEW GAME" onPress={startNewGame} />
        </View>
      </ScrollView>
 
  );
};
export default GameOver;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  highLigth: {
    color: Colors.primary,
  },
  cpntainer: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    height: Dimensions.get("window").width * 0.7,
    width: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  imgContainer: {
    width: "100%",
    height: "100%",
  },
});
