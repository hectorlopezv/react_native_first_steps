import { FC } from "react";
import { View, StyleSheet } from "react-native";

interface Iprops {
  style?: Record<string, any>;
}
const Card: FC<Iprops> = ({ style = {}, children }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
        },
    elevation: 6,
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});
