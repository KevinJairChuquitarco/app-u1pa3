import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert
} from "react-native";

import react, { useState } from "react";

export default function App() {
  const [texto, setTexto] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola Mundo</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text)=>setTexto(text)}
        value={texto}
      />
    <Text>{texto}</Text>
    <Button
        title="Alerta"
        onPress={() => Alert.alert("Alerta",texto)}
      >
    </Button>

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
    height: 50,
    width: 100,
    margin: 0,
    borderWidth: 1,
    padding: 10,
  },
});
