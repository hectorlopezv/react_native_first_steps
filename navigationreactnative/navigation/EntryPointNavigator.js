import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';

const Drawer = createDrawerNavigator();
const TestComp = () => {
  return (
    <View>
      <Text>Hello Navigation</Text>
    </View>
  );
};
const EntryPointNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="MealsFavs">
      <Drawer.Screen name="MealsFavs" component={TestComp} />
    </Drawer.Navigator>
  );
};
export default EntryPointNavigator;
