import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Flex() {
  return (
    <View style={styles.appContainer}>
      <StatusBar />
      <View style={styles.v1}>
        <Text>1</Text>
      </View>
      <View style={styles.v2}>
        <Text>2</Text>
      </View>
      <View style={styles.v3}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flexDirection: "row",
    width: "80%",
    height: 300,
    justifyContent: "space-between",
    alignItems: "center",
  },
  v1: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  v2: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  v3: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },
});
