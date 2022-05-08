import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native'
import React from 'react'
import { autos } from './mockUpCars'
import { Image } from 'react-native'



export default function CarDetailScreen() {
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
            <Text style={styles.card}>Tipo de combustible: {autos[0].fuelType}</Text>
            <Button                          
                title="Abrir auto"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
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
      }

    
});