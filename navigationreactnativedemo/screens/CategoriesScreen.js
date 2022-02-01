import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummydata";
import CategoryGridTtile from "../components/CategoryGridTile";
import React from "react";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
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