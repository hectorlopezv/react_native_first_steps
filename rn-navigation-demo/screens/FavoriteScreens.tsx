import { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
interface IFavoriteScreen {}
const FavoriteScreen: FC<IFavoriteScreen> = () => {
  return (
    <View style={styles.screen}>
      <Text></Text>
    </View>
  );
};
export default FavoriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});