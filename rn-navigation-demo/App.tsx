import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import EntryPointNavigator from "./navigation/EntryPointNavigator";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <EntryPointNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}
export default App;
