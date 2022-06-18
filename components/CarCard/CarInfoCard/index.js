import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';

export default function CarInfoCard({ id, car }) {
  return (
    <>
      <Image
        source={{ uri: 'https://mykeego-public-images.s3.amazonaws.com/tenant-123/Car/bKhOPSTLMSWdxGTcykkWWJYwEYrKgUugxUIwxIXL.png' }}
        style={styles.image}
      />
      <Text style={styles.card}>Estacionamiento: {car.parkingName}</Text>
      <Text style={styles.card}>Ubicacion: {car.idParkingSlot}</Text>
      <Text style={styles.card}>Auto: {car.name}</Text>
      <View style={styles.card}>
        <Text style={[styles.textCenter, { fontWeight: 'bold' }]}>Patente: </Text>
        <Text style={styles.textCenter}>{car.plate}</Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.textCenter, { fontWeight: 'bold' }]}>Nivel de combustible: </Text>
        <Text style={styles.textCenter}>{car.fuelLevel}%</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: 110,
    height: 110,
    alignSelf: 'center',
  },
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
    marginBottom: 2,
  }
});
