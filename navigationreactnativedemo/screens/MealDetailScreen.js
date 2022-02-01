import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {mealsliceActions, selectMeals} from '../store/mealsslice';
const MealsDetailScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const meals = useSelector(selectMeals);
  const mealId = route?.params?.mealId ?? '';
  const selectedMeal = meals.find(meal => meal.id === mealId);

  const toogleFavoriteHandle = useCallback(() => {
    dispatch(mealsliceActions.toogleFavorites(selectedMeal.id));
  }, [dispatch, route.params?.mealId]);

  useEffect(() => {
    console.log('entro aca bebe');
    navigation.setParams({toogleFav: toogleFavoriteHandle});
  }, [toogleFavoriteHandle]);
  return (
    <ScrollView>
      <Image
        source={{
          uri: selectedMeal?.imageUrl,
        }}
        style={styles.image}
      />
      <View>
        <Text>{selectedMeal?.title}</Text>
        <Text>{selectedMeal?.duration}</Text>
        <Text>{selectedMeal?.complexity}</Text>
        <Text>{selectedMeal?.affordability}</Text>
      </View>
      <Text>Ingredients</Text>
      <View style={styles.screen}>
        <Text>{selectedMeal?.title}</Text>
        {selectedMeal?.ingredients.map(ingredient => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text>Steps</Text>
        {selectedMeal?.steps.map(steps => (
          <Text key={steps}>{steps}</Text>
        ))}
      </View>
    </ScrollView>
  );
};
export default MealsDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
});
