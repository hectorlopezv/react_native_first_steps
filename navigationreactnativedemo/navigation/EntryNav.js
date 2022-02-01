import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FilterNavigator from './FilterNavs';

import MealsFavTabNav from './MealsFavTabNav';

const Drawer = createDrawerNavigator();

const EntryNav = () => {
  return (
    <Drawer.Navigator initialRouteName="MealsFavs">
      <Drawer.Screen name="MealsFavs" component={MealsFavTabNav} />
      <Drawer.Screen name="FiltersNavigator" component={FilterNavigator} />
    </Drawer.Navigator>
  );
};
export default EntryNav;
