import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Iprops {
  title: string;
}
const Header: FC<Iprops> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 20,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",

  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontFamily: "open-sans "
  },
});
