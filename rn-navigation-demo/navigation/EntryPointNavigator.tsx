import React, { FC } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsNavigator from "./MealsNavigator";
import FiltersScreen from "../screens/FiltersScreen";
import FilterNavigator from "./FiltersNavigator";
interface IEntryPointNavigator {}

const Drawer = createDrawerNavigator();

const EntryPointNavigator: FC<IEntryPointNavigator> = () => {
  return (
    <Drawer.Navigator initialRouteName="MealsFavs">
      <Drawer.Screen name="MealsFavs" component={MealsNavigator} />
      <Drawer.Screen
        name="FiltersNavigator"
        component={FilterNavigator}
        options={{}}
      />
    </Drawer.Navigator>
  );
};
export default EntryPointNavigator;
