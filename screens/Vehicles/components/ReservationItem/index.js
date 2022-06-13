import React from "react";
import { Box, Avatar, HStack, VStack, Text, Spacer, Divider } from "native-base";
import { TouchableOpacity } from "react-native";
import { dateToString, getHoursToReservations } from "../../../../utils/date_parser";

const ReservationItem = ({ item, navigateToDetails }) => {
    return (
        <TouchableOpacity
            onPress={() => navigateToDetails(item._id, item.car)}
        >
            <Box _dark={{ borderColor: "muted.50" }} pl="1" pr="5" py="2" >
                <HStack height={75} alignItems="center" space={2} justifyContent="space-between">
                    <Avatar size="80px" source={{ uri: "https://w7.pngwing.com/pngs/544/372/png-transparent-car-ford-c-max-ford-b-max-ford-ka-ford-kuga-compact-car-car-vehicle-thumbnail.png" }} />
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
                <Divider my="2" />
            </Box>
        </TouchableOpacity>
    )
}

export default ReservationItem