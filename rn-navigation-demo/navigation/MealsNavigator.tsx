import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoryMealsScreen";
import MealsDetailScreen from "../screens/MealDetailScreen";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

interface IMealsNavigator {}
const Stack = createNativeStackNavigator();
const MealsNavigator: FC<IMealsNavigator> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerBackTitle: "Pa Atras",
        headerTintColor: Platform.OS === "android" ? Colors.primaryColor : "",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerTitle: "Meal Categories",
        }}
      />
      <Stack.Screen
        name="CategoriesMeals"
        component={CategoriesMealScreen}
        options={(props: any) => {
          const catId = props.route.params?.categoryId ?? "";
          const selectedCategory = CATEGORIES.find(
            (cat) => cat.id === catId ?? ""
          );
          return {
            headerTitle: (selectedCategory ?? "") as string,
          };
        }}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealsDetailScreen}
        options={(props: any) => {
          console.log("propsito", props);
          const mealId = props.route.params?.mealId ?? "";
          console.log("mealId", mealId);
          const selectedMeal = MEALS.find((meal) => meal.id === mealId);
          console.log("selectedMeal", selectedMeal);
          return {
            headerTitle: (selectedMeal?.title ?? "") as string,
            headerRight: () =>
              (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title="favorite"
                    iconName={
                      Platform.OS === "android"
                        ? "md-checkmark"
                        : "ios-checkmark"
                    }
                    onPress={() => {
                      console.log("hey");
                    }}
                  />
                </HeaderButtons>
              ) as any,
          };
        }}
      />
    </Stack.Navigator>
  );
};
export default MealsNavigator;

const styles = StyleSheet.create({});
