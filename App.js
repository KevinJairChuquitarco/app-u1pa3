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
  const [peso, setPeso] = useState();
  const [estatura, setEstatura] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hola Mundo</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setPeso(value)}
        value={peso}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value)=>setEstatura(value)}
        value={estatura}
      />
    <Button
        title="Alerta"
        onPress={() => Alert.alert("Alerta",calcularNivelPeso(peso,estatura))}
      >
    </Button>

    </SafeAreaView>
  );
}

const calcularIMC = (peso,estatura) => {
  IMC=peso/(estatura^2)
  return IMC.toFixed(2);
}

const calcularNivelPeso = (peso,estatura) => {
  IMC = calcularIMC(peso,estatura);
  nivelPeso = "";
  if(IMC < 18.5){
    nivelPeso = "Su IMC es "+ IMC + " y tiene Bajo Peso";
  }
  if(IMC >= 18.5 && IMC <25){
    nivelPeso = "Su IMC es "+IMC+" y tiene Peso Saludable";
  }
  if(IMC >= 25 && IMC <30){
    nivelPeso = "Su IMC es "+IMC+" y tiene Sobrepeso";
  }
  if(IMC >= 30){
    nivelPeso = "Su IMC es "+IMC+" y tiene Obesidad";
  }
  return nivelPeso;
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
