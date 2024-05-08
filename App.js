import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola Mundo</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 40,
    height: 20,
  },
  input: {
    height: 95,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
