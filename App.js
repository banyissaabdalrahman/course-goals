import {
  StyleSheet,
  View,
  FlatList,
  Button,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const DUMMY_DATA = [];

export default function App() {
  const [data, setData] = useState(DUMMY_DATA);
  const [isVisiable, setIsVisiable] = useState(false);

  const modalHandler = () => {
    setIsVisiable(true);
  };

  const cancelHandler = () => {
    setIsVisiable(false);
  };

  const addGoalHandler = (input) => {
    if (input.length === 0) {
      return;
    }
    setData((currentData) => [{ text: input, id: uuid.v4() }, ...currentData]);
    setIsVisiable(false);
  };

  const removeGoalHandler = (id) => {
    const filteredData = data.filter((goal) => goal.id !== id);
    setData(filteredData);
  };
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle="default" />
      <Button onPress={modalHandler} title="Add new Goal" />
      <GoalInput
        visible={isVisiable}
        addGoalHandler={addGoalHandler}
        cancelHandler={cancelHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={data}
          renderItem={(itemData) => {
            return (
              <GoalItem onRemoveGoal={removeGoalHandler} itemData={itemData} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
