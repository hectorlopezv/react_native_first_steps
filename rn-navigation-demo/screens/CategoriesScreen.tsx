import { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
interface ICategoriesScreen {}
const CategoriesScreen: FC<ICategoriesScreen> = () => {
  return (
    <View style={styles.screen}>
      <Text></Text>
    </View>
  );
};
export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
