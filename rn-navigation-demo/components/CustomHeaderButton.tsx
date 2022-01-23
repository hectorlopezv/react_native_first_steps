import { FC } from "react";
import { StyleSheet, Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import React from "react";
interface ICustomHeaderButton {
  title: string;
}
const CustomHeaderButton: FC<ICustomHeaderButton> = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      buttonStyle={{
        color: Platform.OS === "android" ? "white" : Colors.primaryColor,
      }}
    />
  );
};
export default CustomHeaderButton;

const styles = StyleSheet.create({});
