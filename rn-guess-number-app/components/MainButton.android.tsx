import { FC } from "react";
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from "react-native";
import Colors from "../constants/color";
interface Iprops {
  onPress: any;
}
const MainButton: FC<Iprops> = ({ children, onPress }) => {
  let Component:any = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Component = TouchableNativeFeedback
  }

  return (
    <Component onPress={onPress} activeOpacity={0.8}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Component>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
