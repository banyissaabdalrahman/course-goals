import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

const GoalItem = (props) => {
  const { itemData, onRemoveGoal } = props;
  const pressStyle =
    Platform.OS === "android" ? { color: "#210644" } : styles.pressedItem;
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={pressStyle}
        style={({ pressed }) => pressed && pressStyle}
        onPress={() => onRemoveGoal(itemData.item.id)}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#210644",
  },
});
