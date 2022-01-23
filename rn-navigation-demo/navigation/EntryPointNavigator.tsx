import React, { FC } from "react";
import { StyleSheet, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import FilterNavigator from "./FiltersNavigator";
interface IEntryPointNavigator {}
const Stack = createNativeStackNavigator();

const EntryPointNavigator: FC<IEntryPointNavigator> = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Filters" component={FilterNavigator} />
    </Stack.Navigator>
  );
};
export default EntryPointNavigator;
