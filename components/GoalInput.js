import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  SafeAreaView,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const { addGoalHandler, visible, cancelHandler } = props;

  const [input, setInput] = useState("");

  const goalInputHandler = (inputText) => {
    setInput(() => inputText);
  };

  const onAddGoal = () => {
    addGoalHandler(input);
    setInput(() => "");
  };

  const onCancel = () => {
    cancelHandler();
    setInput(() => "");
  };

  return (
    <Modal visible={visible} animationType="fade">
      <SafeAreaView style={styles.inputContainer}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/academind/react-native-practical-guide-code/02-basics/extra-files/goal.png",
          }}
          style={styles.image}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          defaultValue={input}
          placeholder="Your course goal!"
          placeholderTextColor="#ccc"
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button onPress={onAddGoal} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={onCancel} title="Cancel" />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    color: "#ccc",
    width: "75%",
    padding: 8,
  },
  buttons: {
    flexDirection: "row",
    margin: 8,
  },
  button: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
