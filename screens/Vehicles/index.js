import React, { useState, useEffect } from "react";
import { Box, FlatList, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider, Divider } from "native-base";
import { Dimensions, TouchableOpacity } from "react-native";
import { fetchReservations } from "../../api/reservations";
import Loader from '../../components/Loader'
import { dateToString, getHoursToReservations } from "../../utils/date_parser";

const VehiclesList = ({ navigation }) => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const window = Dimensions.get("screen").width;

  useEffect(async () => {
    setLoading(true);
    try {
      let response = await fetchReservations();
      setLoading(false);
      setReservations(response);
    } catch (error) {
      console.log(error);
    }
  }, [])

  if (loading) {
    return <Loader />;
  }

  return (
    <Box backgroundColor="#F0EDEC">
      <FlatList width={window} data={reservations} renderItem={({ item }) =>
        <TouchableOpacity onPress={() => navigation.navigate('car_detail', { id: item.id })}>
          <Box
            _dark={{ borderColor: "muted.50" }}
            p="2"
            >
            <HStack 
              height={150} 
              alignItems="center" 
              space={2} 
              justifyContent="space-between" 
              backgroundColor="#fff"
              borderRadius="15"
              p="3">
              <Avatar size="100px" source={{ uri: "https://w7.pngwing.com/pngs/544/372/png-transparent-car-ford-c-max-ford-b-max-ford-ka-ford-kuga-compact-car-car-vehicle-thumbnail.png" }} />
              <VStack>
                <Text _dark={{ color: "warmGray.50" }} color="coolGray.800" bold>
                  {item?.car?.plate}
                </Text>
                <Text color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                  {item?.id}
                </Text>
              </VStack>
              <Spacer />
              <VStack>
                <HStack>
                  <Text fontSize="xs" marginRight={1} textAlign="right" bold>Inicio:</Text>
                  <Text fontSize="xs" _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start">
                    {dateToString(item.startTime)}
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize="xs" marginRight={1} textAlign="right" bold>Horas:</Text>
                  <Text fontSize="xs" _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start">
                    {getHoursToReservations(item.endTime)}
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        </TouchableOpacity>
      }
        keyExtractor={item => item.id} />
    </Box>
  )
};

export default ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <VehiclesList navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  );
};
