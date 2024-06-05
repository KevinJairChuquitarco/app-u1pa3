import {
  SafeAreaView,
  Text,
} from "react-native";

import { Estilos } from "./App.styles";
import { Retrato } from "./src/components/retrato";

export default function App() {
  return (
    <SafeAreaView style={Estilos.container}>
      <Text>Hola con todo</Text>
      <Retrato nombre="Kevin Chuquitarco"></Retrato>
    </SafeAreaView>
  );
}

