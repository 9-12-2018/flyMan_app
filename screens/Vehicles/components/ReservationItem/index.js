import React from "react";
import { Box, Avatar, HStack, VStack, Text, Spacer, Badge } from "native-base";
import { TouchableOpacity } from "react-native";
import { dateToString, getHoursToReservations, hours } from "../../../../utils/date_parser";

const ReservationItem = ({ item, navigateToDetails }) => {
    return (
        <TouchableOpacity onPress={() => navigateToDetails.navigate('car_detail', { reservationId: item._id, car: item.car.plate })}>
            <Box
                _dark={{ borderColor: "muted.50" }}
                p="2"
            >
                <HStack
                    height={150}
                    backgroundColor="#fff"
                    borderRadius="15"
                    p="3">
                    <VStack>
                        <Avatar size="100px" source={{ uri: "https://w7.pngwing.com/pngs/544/372/png-transparent-car-ford-c-max-ford-b-max-ford-ka-ford-kuga-compact-car-car-vehicle-thumbnail.png" }} />
                        <Box marginTop={2}>
                            <Badge colorScheme="success" alignSelf="center" variant="outline">
                                Activo
                            </Badge>
                        </Box>
                    </VStack>
                    <Spacer />
                    <VStack pr={15}>
                        <HStack>
                            <Text
                                _dark={{ color: "warmGray.50" }}
                                color="coolGray.800"
                                bold
                                fontSize={18}
                                marginBottom={2}
                            >
                                {item?.car?.plate}
                            </Text>
                        </HStack>
                        <HStack>
                            <Text fontSize={10} _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start">
                                {dateToString(item.startTime)}
                            </Text>
                        </HStack>
                        <HStack>
                            <Text fontSize={30} _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start">
                                {hours(item.startTime)}
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