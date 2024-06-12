import react from "react";
import { Estilos } from "./commos.styles";
import { SafeAreaView } from "react-native";

export const Contenedor = ({ children }) =>{
    return <SafeAreaView style={Estilos.container}>
       { children }
    </SafeAreaView>
}