import React from "react";
import { Box, Avatar, HStack, VStack, Text, Spacer, Badge } from "native-base";
import { TouchableOpacity } from "react-native";
import { getTimeDifference, hours } from "../../../../utils/date_parser";

const ReservationItem = ({ item, navigateToDetails }) => {
    const { hour: hoursToReservation, minutes: minutesToReservation } = getTimeDifference(item.startTime);
    return (
        <TouchableOpacity onPress={() => navigateToDetails.navigate('car_detail', { reservationId: item._id, car: item.car })}>
            <Box
                _dark={{ borderColor: "muted.50" }}
                p="2"
                maxHeight={200}
            >
                <HStack
                    backgroundColor="#fff"
                    borderRadius="15"
                    p="3">
                    <VStack>
                        <HStack marginLeft={2}>
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
                        <Avatar size="100px" source={{ uri: "https://w7.pngwing.com/pngs/544/372/png-transparent-car-ford-c-max-ford-b-max-ford-ka-ford-kuga-compact-car-car-vehicle-thumbnail.png" }} />
                        <Box marginTop={2}>
                            {
                                item.status === 'ACTIVE' && (
                                    <Badge colorScheme="success" alignSelf="center" variant="outline">
                                        Activo
                                    </Badge>
                                )
                            }
                        </Box>
                    </VStack>
                    <Spacer />
                    <VStack pr={1} justifyContent="space-around">
                        <HStack>
                            <Text fontSize={13} _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start">
                                {item?.car?.parkingName}
                            </Text>
                        </HStack>
                        <HStack>
                            <Text fontSize={30} _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start">
                                {hours(item.startTime)}
                            </Text>
                        </HStack>
                        <VStack marginTop={1} alignItems="center">
                            <Text fontSize="xs" marginRight={0} textAlign="right" bold alignSelf="flex-start">Reserva en</Text>
                            <HStack>
                                {hoursToReservation === 0 && minutesToReservation === 0 ? (
                                    <Text fontSize="md" _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start" marginRight={3}>
                                        Este momento
                                    </Text>
                                ) : (
                                    <>
                                        <Text fontSize="md" _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start">
                                            {`${hoursToReservation} ${hoursToReservation === 1 ? 'hora' : 'horas'}`}
                                        </Text>
                                        <Text fontSize="md" _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start" marginLeft={1}>
                                            {`${minutesToReservation} ${minutesToReservation === 1 ? 'minuto' : 'minutos'}`}
                                        </Text>
                                    </>
                                )
                                }
                            </HStack>
                        </VStack>
                    </VStack>
                </HStack>
            </Box>
        </TouchableOpacity>
    )
}

export default ReservationItem