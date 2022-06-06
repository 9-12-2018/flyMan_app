
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { Button, Center, FormControl, HStack, Input, Modal, NativeBaseProvider } from 'native-base';
import { Image } from 'react-native';
import ICON_NAME from '../../utils/icons';
import CarButton from '../../components/CarButton';
import Loader from '../../components/Loader'
import { fetchReservationById } from '../../api/reservations';
import { checkPin } from '../../api/users';

function CarDetailScreen({ route }) {
  const [reservation, setReservation] = useState(null);
  const [startReservation, setStartReservation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [carOpen, setCarOpen] = useState(true);
  const [pin, setPin] = useState('');

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
    setShowModal(true);
  }

  const handleCarOpen = (bool) => {
    setCarOpen(bool);
  }

  const handlePin = async () => {
    if (!pin) return;
    try {
      let response = await checkPin(pin);
      if (response.pin) {
        setShowModal(false);
        setStartReservation(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://mykeego-public-images.s3.amazonaws.com/tenant-123/Car/bKhOPSTLMSWdxGTcykkWWJYwEYrKgUugxUIwxIXL.png' }}
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
              <HStack mt="5">
                <CarButton
                  style={styles.actionButtons}
                  icon={ICON_NAME.UNLOCK}
                  onPress={() => handleCarOpen(true)}
                  isDisabled={carOpen}
                />
                <CarButton
                  style={styles.actionButtons}
                  icon={ICON_NAME.LOCK}
                  onPress={() => handleCarOpen(false)}
                  isDisabled={!carOpen}
                />
              </HStack>
            )
          }
        </View>
      </SafeAreaView>
      <Modal isOpen={showModal}>
        <Modal.Content maxWidth="300">
          <Modal.Header>Ingrese su PIN</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input maxLength={4} onChangeText={(e) => setPin(e)} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group flex={1} justifyContent="center">
              <Button justifyContent="center" onPress={() => handlePin()} isDisabled={pin.length < 4}>Enviar</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default ({ route }) => {
  return (
    <NativeBaseProvider>
      <CarDetailScreen route={route} />
    </NativeBaseProvider>
  );
};

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