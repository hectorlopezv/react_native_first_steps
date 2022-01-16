import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameOver from "./screens/GameOver";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = (): Promise<any> => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf")
  });
};

export default function App() {
  const [userNumber, setuserNumber] = useState<number | null>(null);
  const [numberOfRounds, setnumberOfRounds] = useState(0);
  const [isLoading, setisLoading] = useState(false);

  if (!isLoading) {
    <AppLoading startAsync={fetchFonts} onFinish={() => setisLoading(true)} onError={console.warn}/>;
  }
  const startGameHandler = (selectedNumber: number) => {
    setuserNumber(selectedNumber);
  };
  const gameOverHandler = (numberOfRounds: number) => {
    setnumberOfRounds(numberOfRounds);
  };
  const startNewGame = () => {
    setuserNumber(null);
    setnumberOfRounds(0);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {userNumber === null && numberOfRounds <= 0 && (
        <StartGameScreen startGameHandler={startGameHandler} />
      )}
      {userNumber !== null && numberOfRounds <= 0 && (
        <GameScreen userChoise={userNumber} onGameOver={gameOverHandler} />
      )}
      {numberOfRounds > 0 && (
        <GameOver
          rounds={numberOfRounds}
          userNumber={userNumber as number}
          startNewGame={startNewGame}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
