import { FC } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
} from "react-native";

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MEALS } from "../data/dummy-data";
import React from "react";

type RootStackParamList = {};
interface IMealsDetailScreen {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<{ params: { mealId: string } }, "params">;
}
const MealsDetailScreen: FC<IMealsDetailScreen> = ({ navigation, route }) => {
  const selectedMeal = MEALS.find(
    (meal) => meal.id === route.params?.mealId ?? ""
  );
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
        {selectedMeal?.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text>Steps</Text>
        {selectedMeal?.steps.map((steps) => (
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
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
});
