import { FC } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/color";
interface Iprops {
  title: string;
}
const Header: FC<Iprops> = ({ title }) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerIOS: {
    backgroundColor: Colors.primary,
  },
  headerAndroid: {
    backgroundColor: Colors.accent,
  },
  header: {
    width: "100%",
    height: 90,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Platform.OS === "android" ? "#ccc" : "black",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontFamily: "open-sans ",
  },
});
