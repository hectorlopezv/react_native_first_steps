import { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
interface IFiltersScreen {}
const FiltersScreen: FC<IFiltersScreen> = () => {
  return (
    <View style={styles.screen}>
      <Text></Text>
    </View>
  );
};
export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});