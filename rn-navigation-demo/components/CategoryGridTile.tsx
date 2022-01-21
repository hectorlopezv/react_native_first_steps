import { FC } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
interface ICategoryGridTile {
  title: string;
  color: string;
  onSelect: (event: GestureResponderEvent) => void;
}
const CategoryGridTtile: FC<ICategoryGridTile> = ({
  title,
  onSelect,
  color,
}) => {
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={{ ...styles.gridItem, backgroundColor: color }}>
      <TouchableCmp onPress={onSelect}>
        <View style={styles.container}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};
export default CategoryGridTtile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
  container: {
    borderRadius: 1,
    height: "100%",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 1,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
