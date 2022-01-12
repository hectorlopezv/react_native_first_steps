import { FC, useState } from "react";
import { Button, View, StyleSheet, TextInput, Modal } from "react-native";

interface Iprops {
  addGoalHandler: any;
  isVisible: boolean;
  cancelGoalHandler: any;
}
const GoalInput: FC<Iprops> = ({
  addGoalHandler,
  isVisible,
  cancelGoalHandler,
}) => {
  const [enteredGoal, setenteredGoal] = useState<string>("");
  const goalInputHandler = (text: string) => {
    setenteredGoal(text);
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title="ADD"
          onPress={() => addGoalHandler(enteredGoal, setenteredGoal)}
          color="#1E6738"
        />
        <Button
          title="CANCEL"
          onPress={() => cancelGoalHandler(setenteredGoal)}
          color="red"
        />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderBottomColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    width: "80%",
  },
});
