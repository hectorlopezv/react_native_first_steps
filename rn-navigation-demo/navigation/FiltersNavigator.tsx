import React, { FC } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MealsNavigator from "./MealsNavigator";
import FiltersScreen from "../screens/FiltersScreen";
import CustomHeaderButton from "../components/CustomHeaderButton";

interface IFilterNavigator {}
const Stack = createNativeStackNavigator();

const FilterNavigator: FC<IFilterNavigator> = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={(optionsProps) => ({
          headerLeft: (props: any) => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                  console.log("optionsProps", optionsProps);
                  optionsProps.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerRight: (props: any) => {
            const saveFn = (optionsProps.route?.params as any).save;
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Save" iconName="ios-save" onPress={saveFn} />
              </HeaderButtons>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};
export default FilterNavigator;
