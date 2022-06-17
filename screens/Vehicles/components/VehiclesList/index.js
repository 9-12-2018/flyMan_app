import React, { useState, useEffect } from "react";
import { Box, FlatList, HStack, Text } from "native-base";
import { Dimensions, RefreshControl } from "react-native";
import { fetchReservations } from "../../../../api/reservations";
import Loader from '../../../../components/Loader';
import ReservationItem from "../ReservationItem";
import { useIsFocused } from "@react-navigation/native";

const VehiclesList = ({ route, navigation }) => {
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

  const NoReservations = () => {
    return (
      <HStack justifyContent="center" marginTop={window/2}>
        <Text fontSize={18}>No hay reservas asignadas</Text>
      </HStack>
    );
  }

  if (reservations.length === 0) {
    return <FlatList
      width={window}
      data={[{}]}
      renderItem={({ item }) => <NoReservations />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={fetchingReservations}
        />}
     />
    }

  console.log(reservations);

  return (
    <Box>
      <FlatList
        width={window}
        data={reservations?.length > 0 ? reservations : []}
        renderItem={
          ({ item }) => <ReservationItem
            item={item}
            navigateToDetails={navigation}
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