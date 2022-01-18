import { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
interface ICategoriesMealScreen {}
const CategoriesMealScreen: FC<ICategoriesMealScreen> = () => {
  return (
    <View style={styles.screen}>
      <Text></Text>
    </View>
  );
};
export default CategoriesMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});