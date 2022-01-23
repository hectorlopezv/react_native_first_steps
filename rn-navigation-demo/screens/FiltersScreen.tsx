import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsNavigator from "../navigation/MealsNavigator";
interface IFiltersScreen {}

const Drawer = createDrawerNavigator();

const FiltersScreen: FC<IFiltersScreen> = () => {
  return (
    <Drawer.Navigator initialRouteName="MealsFavs">
      <Drawer.Screen name="MealsFavs" component={MealsNavigator} />
    </Drawer.Navigator>
  );
};
export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
