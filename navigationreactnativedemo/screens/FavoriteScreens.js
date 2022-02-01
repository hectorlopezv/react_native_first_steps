import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import {selectFavMeals} from '../store/mealsslice';

const FavoriteScreen = ({route, navigation}) => {
  const favMeals = useSelector(selectFavMeals);

  const onselectMeal = itemData => {
    console.log('itemData', itemData);
    navigation.navigate('MealDetailScreen', {
      mealId: itemData.item.id,
    });
  };
  if (favMeals.length === 0) {
    return (
      <View>
        <Text>No Favorites</Text>
      </View>
    );
  }
  return <MealList listData={favMeals} onSelectedMeal={onselectMeal} />;
};
export default FavoriteScreen;
