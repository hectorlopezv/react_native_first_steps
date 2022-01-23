import { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MealsNavigator from "./MealsNavigator";
import React from "react";
import FavoritesNavigator from "./FavoritesNavigator"

interface ICategoriesNavigator {}
const Tab = createMaterialBottomTabNavigator();

const CategoriesNavigator: FC<ICategoriesNavigator> = () => {
  return (
    <Tab.Navigator
      initialRouteName="Meals"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
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
        name="Favorites"
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
