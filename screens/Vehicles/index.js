import React from "react";
import { Center, NativeBaseProvider } from "native-base";
import VehiclesList from "./components/VehiclesList";


export default ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <VehiclesList navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  );
};
