import { Contenedor } from "../components/commons/contenedor";
import React from "react";
import { Avatar, VStack, Center, NativeBaseProvider } from "native-base";
export const UserScreen = () => {
  return (
    <Contenedor>
      <NativeBaseProvider>
        <Center>
          <VStack
            space={2}
            alignItems={{
              base: "center",
              md: "flex-start",
            }}
          >
            <Avatar
              bg="green.500"
              alignSelf="center"
              size="xs"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            >
              AJ
            </Avatar>
            <Avatar
              bg="cyan.500"
              alignSelf="center"
              size="sm"
              source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
            >
              HS
            </Avatar>
            <Avatar
              bg="indigo.500"
              alignSelf="center"
              size="md"
              source={{
                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            >
              RS
            </Avatar>
            <Avatar
              alignSelf="center"
              bg="amber.500"
              size="lg"
              source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
            >
              AK
            </Avatar>
            <Avatar
              bg="pink.600"
              alignSelf="center"
              size="xl"
              source={{
                uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80",
              }}
            >
              GG
            </Avatar>
            <Avatar
              bg="purple.600"
              alignSelf="center"
              size="2xl"
              source={{
                uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
              }}
            >
              RB
            </Avatar>
          </VStack>
        </Center>
      </NativeBaseProvider>
    </Contenedor>
  );
};
