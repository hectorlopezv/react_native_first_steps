import { FC } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ImageBackground,
} from "react-native";
interface IMealItem {
  onSelectMeal: (event: GestureResponderEvent) => void;
  title: string;
  duration: number;
  complexity: string;
  afford: string;
  image: string;
}
const MealIteam: FC<IMealItem> = ({
  onSelectMeal,
  title,
  duration,
  complexity,
  afford,
  image,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            style={styles.bgImage}
            source={{
              uri: image,
            }}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {title}
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text>{duration}m</Text>
          <Text>{complexity}</Text>
          <Text>{afford}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default MealIteam;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    paddingVertical: 5,
    textAlign: "center",
    paddingHorizontal: 12,
  },
  mealRow: {
    flexDirection: "row",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealDetail: {
    justifyContent: "space-around",
  },
  mealHeader: {
    height: "85%",
  },
  mealItem: {
    

    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
