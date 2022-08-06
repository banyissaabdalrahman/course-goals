import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
} from "react-native";
import { useState } from "react";

const DUMMY_DATA = [];

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(DUMMY_DATA);

  const goalInputHandler = (inputText) => {
    setInput(() => inputText);
  };
  const addGoalHandler = () => {
    if (input.length === 0) {
      return;
    }
    setData((currentData) => [input, ...currentData]);
    setInput(() => "");
  };
  return (
    <View style={styles.appContainer}>
      <StatusBar />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          defaultValue={input}
          placeholder="Your course goal!"
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals ...</Text>
        {data.map((goal, id) => (
          <Text key={id}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "75%",
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
