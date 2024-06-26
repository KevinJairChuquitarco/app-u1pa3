import { View, Text, Button } from "react-native";
import { Contenedor } from "../../componentes/contenedor/contenedor";
export const Home = ({ navigation }) => {
  return (
    <Contenedor>
      <View>
        <Text>Estoy en la pantalla Home</Text>
        <Button
          title="Ir a personajes"
          onPress={() => navigation.navigate("Personajes")}
        />
      </View>
    </Contenedor>
  );
};
