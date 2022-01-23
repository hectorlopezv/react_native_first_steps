import React, { FC, useState, useLayoutEffect, useCallback } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import Colors from "../constants/Colors";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  MealDetailScreen: { mealId: string };
};
interface IFiltersScreen {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<{ params: { categoryId: string } }, "params">;
}

const FiltersScreen: FC<IFiltersScreen> = ({ navigation, route }) => {
  const [isGlutenFree, setisGlutenFree] = useState(false);
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
    };
    console.log("el save papi");
  }, [isGlutenFree]);

  useLayoutEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [navigation, saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-free</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Colors.primaryColor}
          value={isGlutenFree}
          onValueChange={(newValue) => setisGlutenFree(newValue)}
        />
      </View>
    </View>
  );
};
export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});
