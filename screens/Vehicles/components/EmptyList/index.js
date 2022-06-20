import React from 'react'
import { Box, Text, HStack } from "native-base";
import { Dimensions } from "react-native";

export const EmptyList = () => {
    const window = Dimensions.get("screen").width;
    return (
      <HStack justifyContent="center" marginTop={window/2} height="100%">
        <Text fontSize={18}>No hay reservas asignadas</Text>
      </HStack>
    );
  }
