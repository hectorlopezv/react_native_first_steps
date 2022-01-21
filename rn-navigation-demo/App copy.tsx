import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';


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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function TabsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}
function Messages({ navigation, route }: { navigation: any; route: any }) {
  return <Text>Messages </Text>;
}
function Feed({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Feed</Text>
      <Button title="GOBACK" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}
function HomeScreen({ navigation }: { navigation: any }) {
  const [counter, setcounter] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setcounter((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);
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
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "PA Atras",
    });
  }, [navigation]);
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
        title="Go to Tabs Messages"
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Messages",
            params: {
              user: "HelloTest",
            },
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerBackTitle: "Pa Atras",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Group
          screenOptions={({
            route,
            navigation,
          }: {
            route: any;
            navigation: any;
          }) => ({
            title: route.params?.title,
          })}
        >
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Feed" component={Feed} />
        </Stack.Group>
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="blue"
              />
            ),
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{ hello: "inicio" }}
          options={({
            route,
            navigation,
          }: {
            route: any;
            navigation: any;
          }) => ({
            title: "Details",
            headerBackTitle: "pa Atras",
            headerBackTitleVisible: true,
            headerLeft: (props: any) => (
              <Button
                onPress={() => props.canGoBack && navigation.goBack()}
                title="Left Button"
                color="blue"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }: { route: any }) => ({
            title: route.params.name,
          })}
        /> */}
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
