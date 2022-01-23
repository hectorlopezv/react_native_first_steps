import React, { FC } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsNavigator from "./MealsNavigator";
import FiltersScreen from "../screens/FiltersScreen";

interface IFilterNavigator {}

const Drawer = createDrawerNavigator();


const FilterNavigator: FC<IFilterNavigator> = () => {
  return (
    <Drawer.Navigator initialRouteName="MealsFavs">
      <Drawer.Screen name="MealsFavs" component={MealsNavigator} />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
  );
};
export default FilterNavigator;

