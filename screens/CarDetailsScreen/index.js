import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import { useToast } from 'native-base';
import { Image } from 'react-native';
import ICON_NAME from '../../utils/icons';
import CarButton from '../../components/CarButton';
import Loader from '../../components/Loader'
import { fetchReservationById } from '../../api/reservations';

export default function CarDetailScreen({ route }) {
    const [reservation, setReservation] = useState(null);
    const [startReservation, setStartReservation] = useState(false);
    const [loading, setLoading] = useState(false);
    const [carOpen, setCarOpen] = useState(false);
    
    const { id } = route.params;

    useEffect(async () => {
        setLoading(true);
        try {
          let response = await fetchReservationById(id);
          setReservation(response);
          setLoading(false);
        } catch (error) {
          // console.log(error);
        }
    }, [])

    const handleStartReservation = () => {
        setStartReservation(prev => !prev);
    }

    const handleCarOpen = () => {
        setCarOpen(prev => !prev);
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
              <Image source={{uri: 'https://mykeego-public-images.s3.amazonaws.com/tenant-123/Car/bKhOPSTLMSWdxGTcykkWWJYwEYrKgUugxUIwxIXL.png'}}
                      style={styles.image}
              />
              <Text style={styles.card}>Reservation: {id}</Text>
              <Text style={styles.card}>Estacionamiento: {reservation?.car?.parkingName}</Text>
              <Text style={styles.card}>Ubicacion: {reservation?.car?.idParkingSlot}</Text>
              <Text style={styles.card}>Patente: {reservation?.car?.plate}</Text>
              <Text style={styles.card}>Nivel de combustible: {reservation?.car?.fuelLevel}</Text>
              {
                  !startReservation ? (
                    <CarButton
                      style={styles.actionButtons}
                      title="Iniciar Reserva"
                      onPress={handleStartReservation}
                    />
                  ) : (
                    <CarButton
                      style={styles.actionButtons}
                      icon={!carOpen ? ICON_NAME.UNLOCK : ICON_NAME.LOCK}
                      onPress={handleCarOpen}
                    />
                  )
              }
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
        width: 150,
        height: 80,        
        alignSelf: 'center',
        marginBottom: 12
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',        
    },
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10
      },
    actionButtons: {
        width: 25,
        borderRadius: 50,
    }
});