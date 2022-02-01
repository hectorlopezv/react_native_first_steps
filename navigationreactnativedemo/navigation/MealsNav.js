import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Platform, Button} from 'react-native';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealDetailScreen';

import {CATEGORIES} from '../data/dummydata';
import {useSelector} from 'react-redux';
import {selectMeals} from '../store/mealsslice';

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
  const meals = useSelector(selectMeals);
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerBackTitle: 'Pa Atras',
        headerTintColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerTitle: 'Meal Categories',
        }}
      />
      <Stack.Screen
        name="CategoriesMeals"
        component={CategoriesMealScreen}
        options={props => {
          const catId = props.route.params?.categoryId ?? '';
          const selectedCategory = CATEGORIES.find(
            cat => cat.id === catId ?? '',
          );
          return {
            headerTitle: selectedCategory ?? '',
          };
        }}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealsDetailScreen}
        options={props => {
          console.log('propsito', props);
          const mealId = props.route.params?.mealId ?? '';
          const selectedMeal = meals.find(meal => meal.id === mealId);
          console.log(
            'props?.route?.params?.toogleFav',
            props?.route?.params?.toogleFav,
          );
          return {
            headerTitle: selectedMeal?.title ?? '',
            headerRight: () => (
              <Button
                title="favorites"
                onPress={props?.route?.params?.toogleFav}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};
export default MealsNavigator;

const styles = StyleSheet.create({});
