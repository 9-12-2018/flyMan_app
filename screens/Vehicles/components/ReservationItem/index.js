import React from "react";
import { Box, Avatar, HStack, VStack, Text, Spacer, Divider } from "native-base";
import { TouchableOpacity } from "react-native";
import { dateToString, getHoursToReservations } from "../../../../utils/date_parser";

const ReservationItem = ({ item, navigateToDetails }) => {
    return (
        <TouchableOpacity onPress={() => navigateToDetails.navigate('car_detail', { reservationId: item._id, car: item.car.plate })}>
            {console.log(item.car.plate)}
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
    )
}

export default ReservationItem