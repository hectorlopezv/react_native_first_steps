import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MealsNavigator from './MealsNav';
import FavoritesNavigator from './FavsNav';
const Tab = createBottomTabNavigator();

const MealsFavTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesNavigator} />
    </Tab.Navigator>
  );
};
export default MealsFavTabNav;
