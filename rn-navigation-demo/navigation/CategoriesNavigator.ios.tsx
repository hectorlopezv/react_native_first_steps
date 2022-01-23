import { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsNavigator from "./MealsNavigator";
import FavoritesNavigator from "./FavoritesNavigator"
import React from "react";

interface ICategoriesNavigator {}
const Tab = createBottomTabNavigator();

const CategoriesNavigator: FC<ICategoriesNavigator> = () => {
  return (
    <Tab.Navigator
      initialRouteName="Meals"
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: (tabInfo: any) => (
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesNavigator"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: (tabInfo: any) => (
            <Ionicons name="ios-star" size={25} color={tabInfo.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default CategoriesNavigator;
