import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// export default function App() {
//   let [fontsLoaded] = useFonts({
//     "Opens-Sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "Opens-Sans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//   });
//   if (!fontsLoaded) {
//     return <AppLoading />;
//   } else {
//     return (
//       <NavigationContainer>
//         <View style={styles.container}>
//           <Text>Open up App.tsx to start working on your app!</Text>
//           <StatusBar style="auto" />
//         </View>
//       </NavigationContainer>
//     );
//   }
// }

function HomeScreen({ navigation }: { navigation: any }) {
  const [counter, setcounter] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen{counter}</Text>
      <Button
        onPress={() => {
          setcounter((counter: any) => counter + 1);
          navigation.push("Details");
        }}
        title="GO to deTAILS"
      />

      <Button
        title="Go to profile page"
        onPress={() => {
          setcounter((counter: any) => counter + 1);
          navigation.push("Profile", {
            hello: "bebesito",
          });
        }}
      />
    </View>
  );
}

function Details({ navigation, route }: { navigation: any; route: any }) {
  const { hello = null } = route.params;
  const [counter, setcounter] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details {hello}</Text>
      <Button
        title="Go to details page again"
        onPress={() => {
          setcounter((counter: any) => counter + 1);
          navigation.replace("Details", {
            hello: "bebesito",
          });
        }}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Update Params"
        onPress={() =>
          navigation.setParams({
            hello: "someText",
          })
        }
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
}

function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/icon.png")}
    />
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{ hello: "inicio" }}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }: { route: any }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
