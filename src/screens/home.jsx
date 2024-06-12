import {
    SafeAreaView,
    Text,
    Button
  } from "react-native";
  
  import { Estilos } from "./home.styles";
  import { Retrato } from "../components/retrato";

  import { Contenedor } from "../components/commons/contenedor";
  
  export const HomeScreen = ({ navigation }) => {
    return (
      <Contenedor>
        <Text>Hola con todo</Text>
        <Retrato nombre="Kevin Chuquitarco"></Retrato>
        <Button title="Ir a User" onPress={()=>navigation.navigate('User')}></Button>
      </Contenedor>
    );
  }