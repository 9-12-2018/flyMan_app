import React from "react";
import { Center, NativeBaseProvider } from "native-base";
import VehicleList from "../../components/VehicleList";


export default ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <VehiclesList navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  );
};
