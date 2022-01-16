import { FC } from "react";
import { Text, StyleSheet } from "react-native";
interface props {}
const BodyText: FC<props> = (props) => {
  return <Text style={styles.body}>{props.children}</Text>;
};

export default BodyText;
const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans-bold ",
  },
});
