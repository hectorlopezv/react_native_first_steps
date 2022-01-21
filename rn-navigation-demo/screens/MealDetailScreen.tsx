import { FC } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MEALS } from "../data/dummy-data";

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
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
      <Button
        title="GO Back to Categories"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
export default MealsDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
