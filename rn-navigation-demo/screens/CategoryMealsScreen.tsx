import React, { FC } from "react";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

type RootStackParamList = {
  MealDetailScreen: { mealId: string };
};
export interface ICategoriesMealScreen {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<{ params: { categoryId: string } }, "params">;
}
const CategoriesMealScreen: FC<ICategoriesMealScreen> = ({
  navigation,
  route,
}) => {
  const displayedMeals = MEALS.filter((meal) => {
    const isInvalid = meal.categoryIds.indexOf(route.params?.categoryId ?? "");
    return isInvalid >= 0;
  });

  const onselectMeal = (itemData: any) =>
    navigation.navigate("MealDetailScreen", {
      mealId: itemData.item.id,
    });
  return <MealList listData={displayedMeals} onSelectedMeal={onselectMeal} />;
};
export default CategoriesMealScreen;
