import { FC } from "react";
import { StyleSheet, FlatList } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTtile from "../components/CategoryGridTile";
import React from "react";
interface ICategoriesScreen {
  navigation: NavigationProp<ParamListBase>;
}
const CategoriesScreen: FC<ICategoriesScreen> = ({ navigation }) => {
  const renderGridItem = (itemData: any) => {
    return (
      <CategoryGridTtile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate("CategoriesMeals", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};
export default CategoriesScreen;

const styles = StyleSheet.create({});
