import { SafeAreaView, Text } from "react-native";
import { ContendorStyles } from "./contenedor.styles"

export const Contenedor = ({ children }) => {
  return (
    <SafeAreaView style={ContendorStyles.container}>
      {/* Quiero escribrir código aquí */}
      { children }
    </SafeAreaView>
  );
};

