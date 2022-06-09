import React, { useState, useEffect } from "react";
import { Box, FlatList } from "native-base";
import { Dimensions } from "react-native";
import { fetchReservations } from "../../../../api/reservations";
import Loader from '../../../../components/Loader';
import ReservationItem from "../ReservationItem";

const VehiclesList = ({ navigation }) => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(false);
    const window = Dimensions.get("screen").width;

    useEffect(async () => {
        setLoading(true);
        try {
            let response = await fetchReservations();
            setReservations(response);
            setLoading(false);
        } catch (error) { }
    }, [])

    if (loading) {
        return <Loader />;
    }

    return (
        <Box>
            <FlatList
                width={window}
                data={reservations}
                renderItem={
                    ({ item }) => <ReservationItem
                        item={item}
                        navigateToDetails={(id, car) => navigation.navigate('car_detail', { id: id, car: car })}
                    />
                }
                keyExtractor={item => item._id}
            />
        </Box>
    )
};

export default VehiclesList;