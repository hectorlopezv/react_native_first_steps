import React from "react";
import { FC } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

interface IMealList {
  listData: any;
  onSelectedMeal: any;
}
const MealList: FC<IMealList> = ({ listData, onSelectedMeal }) => {
  const renderMeal = (itemData: any) => {
    return renderMealItem(itemData);
  };
  const renderMealItem = (itemData: any) => {
    return (
      <MealItem
        onSelectMeal={() => onSelectedMeal(itemData)}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        afford={itemData.item.affordability}
        image={itemData.item.imageUrl}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={listData}
        renderItem={renderMeal}
        style={{
          width: "100%",
        }}
      />
    </View>
  );
};
export default MealList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
