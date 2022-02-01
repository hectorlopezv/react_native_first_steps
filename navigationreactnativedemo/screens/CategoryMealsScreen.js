import React from 'react';
import {useSelector} from 'react-redux';

import MealList from '../components/MealList';
import {selecteFilteredMeals} from '../store/mealsslice';

const CategoriesMealScreen = ({navigation, route}) => {
  const meals = useSelector(selecteFilteredMeals);
  const displayedMeals = meals.filter(meal => {
    const isInvalid = meal.categoryIds.indexOf(route.params?.categoryId ?? '');
    return isInvalid >= 0;
  });

  const onselectMeal = itemData =>
    navigation.navigate('MealDetailScreen', {
      mealId: itemData.item.id,
    });
  return <MealList listData={displayedMeals} onSelectedMeal={onselectMeal} />;
};
export default CategoriesMealScreen;
