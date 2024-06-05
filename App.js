import {
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola con todo</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
