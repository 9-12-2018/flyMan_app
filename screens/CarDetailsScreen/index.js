import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import { autos } from './mockUpCars';
import { Image } from 'react-native';
import ICON_NAME from '../../utils/icons';
import CarButton from '../../components/CarButton';

export default function CarDetailScreen() {
    const [carOpen, setCarOpen] = useState(false);
    
    const handleCarOpen = () => {
        setCarOpen(prev => !prev);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
            <Image source={{uri: 'https://mykeego-public-images.s3.amazonaws.com/tenant-123/Car/bKhOPSTLMSWdxGTcykkWWJYwEYrKgUugxUIwxIXL.png'}}
                    style={styles.image}
            />
            <Text style={styles.card}>Estacionamiento: {autos[0].parkingName}</Text>
            <Text style={styles.card}>Ubicacion: {autos[0].idParkingSlot}</Text>
            <Text style={styles.card}>Modelo: {autos[0].description}</Text>
            <Text style={styles.card}>Patente: {autos[0].plate}</Text>
            <Text style={styles.card}>Nivel de combustible: {autos[0].fuelLevel}</Text>
            <CarButton
                style={styles.actionButtons}
                icon={!carOpen ? ICON_NAME.UNLOCK : ICON_NAME.LOCK}
                onPress={handleCarOpen}
            />
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
        padding: 20,
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