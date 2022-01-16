import { FC } from "react";
import { TextInput, StyleSheet } from "react-native";

interface Iprops {
  style?: Record<string, any>;
  blurOnSubmit?: boolean;
  autoCapitalize?: "none";
  autoCorrect?: boolean;
  keyboardType?: "number-pad";
  maxLength?: number;
  onChangeText: any;
  value: any;
}
const Input: FC<Iprops> = ({ style = {}, ...props }) => {
  return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
