import React, { FC } from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  MealDetailScreen: { mealId: string };
};
interface IFavoriteScreen {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<{ params: { categoryId: string } }, "params">;
}
const FavoriteScreen: FC<IFavoriteScreen> = ({ route, navigation }) => {
  const favMeal = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  const onselectMeal = (itemData: any) => {
    console.log("itemData", itemData);
    navigation.navigate("MealDetailScreen", {
      mealId: itemData.item.id,
    });
  };
  return <MealList listData={favMeal} onSelectedMeal={onselectMeal} />;
};
export default FavoriteScreen;
