import React, { useState, useEffect } from "react";
import { Box, FlatList } from "native-base";
import { Dimensions, RefreshControl } from "react-native";
import { fetchReservations } from "../../../../api/reservations";
import Loader from '../../../../components/Loader';
import ReservationItem from "../ReservationItem";
import { useIsFocused } from "@react-navigation/native";

const VehiclesList = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(false);
    const window = Dimensions.get("screen").width;

    useEffect(() => {
      fetchingReservations();
    }, [isFocused])

    const fetchingReservations = async () => {
      setLoading(true);
      try {
          let response = await fetchReservations();
          setReservations(response);
      } catch (error) { } finally { setLoading(false) }
    }

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
                        navigateToDetails={(reservationId, car) => navigation.navigate('car_detail', { reservationId, car })}
                    />
                }
                keyExtractor={item => item._id}
                refreshControl={
                  <RefreshControl
                    refreshing={loading}
                    onRefresh={fetchingReservations}
                  />
                }
            />
        </Box>
    )
};

export default VehiclesList;