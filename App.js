import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
     <Text>Hello World!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    padding:50,
  }
});
