import { View, StyleSheet, FlatList, Button } from "react-native";
import { useState, FC } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

interface Iprops {}

const App: FC<Iprops> = () => {
  const [listOfGoals, setlistOfGoals] = useState<
    { key: string; value: string }[]
  >([]);
  const [isVisible, setisVisible] = useState(false);

  const addGoalHandler = (goaltitle: string, setHandler: any) => {
    if (goaltitle === "") return;
    setlistOfGoals((currentState) => [
      ...currentState,
      { key: Math.random().toString(), value: goaltitle },
    ]);
    setHandler("");
    setisVisible(false);
  };

  const removeGoalHandler = (goalId: string) => {
    setlistOfGoals((currentState) => {
      return currentState.filter((item) => item.key !== goalId);
    });
  };
  const cancelGoalHandler = (setHandler: any) => {
    setisVisible(false);
    setHandler("");
  };
  return (
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        onPress={() => setisVisible((visible) => !visible)}
      />
      <GoalInput
        addGoalHandler={addGoalHandler}
        cancelGoalHandler={cancelGoalHandler}
        isVisible={isVisible}
      />

      <FlatList
        data={listOfGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem
              id={itemData.item.key}
              title={itemData.item.value}
              onDelete={removeGoalHandler}
            />
          );
        }}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
