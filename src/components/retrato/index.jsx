import { Text, Image, View } from "react-native";
import { RetratoStyles } from "./retrato.stayles"

export const Retrato = (props) => {
    return <View>
        <Text>Hola {props.nombre}</Text>
        <Image style = {RetratoStyles.imagen} source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}></Image>
    </View>
}