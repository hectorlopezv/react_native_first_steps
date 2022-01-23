import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";
import FavoriteScreen from "../screens/FavoriteScreens"
import { CATEGORIES, MEALS } from "../data/dummy-data";


interface IFavoritesNavigator {}
const Stack = createNativeStackNavigator();
const FavoritesNavigator: FC<IFavoritesNavigator> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerBackTitle: "Pa Atras",
        headerTintColor: Platform.OS === "android" ? Colors.primaryColor : "",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          headerTitle: "Meal Categories",
        }}
      />

   
    </Stack.Navigator>
  );
};
export default FavoritesNavigator;

const styles = StyleSheet.create({});
