
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Alert } from 'react-native';
import { Button, useToast, HStack, Modal, NativeBaseProvider } from 'native-base';
import Loader from '../../components/Loader'
import { checkPin } from '../../api/users';
import { fetchService, createService } from '../../api/services';
import { openCar, closeCar } from '../../api/cars'
import PinModal from './Modals/PinModal';
import CarInfoCard from '../../components/CarCard/CarInfoCard';
import CarButtonPanel from '../../components/CarCard/CardButtonPanel';

function CarDetailScreen({ route, navigation }) {
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [carOpen, setCarOpen] = useState(true);
  const [pin, setPin] = useState('');
  // const [pinIncorrect, setPinIncorrect] = useState(false);
  const [service, setService] = useState(null);

  const { reservationId, car } = route.params;

  useEffect(async () => {
    setLoading(true);
    try {
      const service = await fetchService(car.plate, reservationId);
      setService(service._id);
    } catch (error) {
      // openAlert(error.message);
    } finally {
      setLoading(false);
    }
  }, [])

  const handleStartReservation = () => {
    setShowModal(true);
  }

  const handleCarOpen = async () => {
    try {
      const response = await openCar();
      if (response) {
        setCarOpen(true);
        toast.show({
          description: "Auto abierto",
          placement: "bottom"
        })
      }
    } catch (error) {
      setCarOpen(false);
      toast.show({
        description: "Error al abrir el auto.",
        placement: "bottom"
      })
    }
  }

  const handleCarClose = async () => {
    try {
      const response = await closeCar();
      if (response) {
        setCarOpen(false);
        toast.show({
          description: "Auto cerrado",
          placement: "bottom"
        })
      }
    } catch (error) {
      setCarOpen(true);
      toast.show({
        description: "Error al cerrar el auto.",
        placement: "bottom"
      })
    }
  }

  const handlePin = async () => {
    if (!pin) return;
    try {
      let response = await checkPin(pin);
      if (response.pin) {
        startService();
        toast.show({
          description: "Reserva iniciada",
          placement: "bottom"
        })
      }
    } catch (error) {
      toast.show({
        // description: `${error.message}`,
        description: "Error al iniciar reserva",
        placement: "bottom"
      })
    } finally {
      setShowModal(false);
    }
  }

  const startService = async () => {
    try {
      const service = await createService({ plate: car.plate, reservationId, carImage: car.image });
      setService(service.serviceId);
    } catch (error) {
      openAlert(error.message);
    }
  }

  const handleEndReseration = () => {
    navigation.navigate('user_report', { serviceId: service });
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <CarInfoCard id={reservationId} car={car} />
          <CarButtonPanel
            service={service}
            handleStartReservation={handleStartReservation}
            handleCarOpen={handleCarOpen}
            handleCarClose={handleCarClose}
            carOpen={carOpen}
            handleEndReseration={handleEndReseration}
          />
        </View>
      </SafeAreaView>
      <Modal isOpen={showModal}>
        <PinModal
          setPin={setPin}
          setShowModal={setShowModal}
          handlePin={handlePin}
          pinLength={pin.length}
        />
      </Modal>
    </>
  )
}

export default ({ route, navigation }) => {
  return (
    <NativeBaseProvider>
      <CarDetailScreen route={route} navigation={navigation} />
    </NativeBaseProvider>
  );
};

const openAlert = (error) => {
  Alert.alert('Error', error, [{ text: 'OK', style: 'cancel' }]);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});