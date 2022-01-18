import { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
interface IMealsDetailScreen {}
const MealsDetailScreen: FC<IMealsDetailScreen> = () => {
  return (
    <View style={styles.screen}>
      <Text></Text>
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