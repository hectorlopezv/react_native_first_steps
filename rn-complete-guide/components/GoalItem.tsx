import { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface Iprops {
  title: string;
  id: string;
  onDelete: any;
}
const GoalItem: FC<Iprops> = ({ title, onDelete, id }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)} activeOpacity={0.8}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
