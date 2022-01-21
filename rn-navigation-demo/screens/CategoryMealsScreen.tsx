import { FC } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MEALS } from "../data/dummy-data";
import MealIteam from "../components/MealItem";

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
  const renderMealItem = (itemData: any) => {
    return (
      <MealIteam
        onSelectMeal={() =>
          navigation.navigate("MealDetailScreen", {
            mealId: itemData.item.id,
          })
        }
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        afford={itemData.item.affordability}
        image={itemData.item.imageUrl}
      />
    );
  };
  const displayedMeals = MEALS.filter((meal) => {
    const isInvalid = meal.categoryIds.indexOf(route.params?.categoryId ?? "");
    return isInvalid >= 0;
  });
  const renderMeal = (itemData: any) => {
    return renderMealItem(itemData);
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMeal}
        style={{
          width: "100%",
        }}
      />
    </View>
  );
};
export default CategoriesMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
