
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { Button, useToast, HStack, Modal, NativeBaseProvider } from 'native-base';
import Loader from '../../components/Loader'
import { checkPin } from '../../api/users';
import { fetchService } from '../../api/services';
import PinModal from './Modals/PinModal';
import CarInfoCard from '../../components/CarCard/CarInfoCard';
import CarButtonPanel from '../../components/CarCard/CardButtonPanel';

function CarDetailScreen({ route, navigation }) {
  const toast = useToast();
  const [reservation, setReservation] = useState(null);
  const [startReservation, setStartReservation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [carOpen, setCarOpen] = useState(true);
  const [pin, setPin] = useState('');
  const [pinIncorrect, setPinIncorrect] = useState(false);
  const [service, setService] = useState(null);

  const { id, car } = route.params;

  useEffect(async () => {
    setLoading(true);
    try {
      const service = await fetchService(id);
      console.log(service);
      setService(service);
    } catch (error) { } finally {
      setLoading(false);
    }
  }, [])

  const handleStartReservation = () => {
    setShowModal(true);
  }

  const handleCarOpen = (bool) => {
    setCarOpen(bool);
    if (bool === true) {
      toast.show({
        description: "Auto abierto",
        placement: "bottom"
      })
    } else {
      toast.show({
        description: "Auto cerrado",
        placement: "bottom"
      })
    }
  }

  const handlePin = async () => {
    if (!pin) return;
    try {
      let response = await checkPin(pin);
      if (response.pin) {
        setShowModal(false);
        setStartReservation(true);
        toast.show({
          description: "Reserva iniciada",
          placement: "bottom"
        })
      }
    } catch (error) {
      toast.show({
        description: "Error al iniciar reserva",
        placement: "bottom"
      })
    }
  }
  
  const handleEndReseration = () => {
    navigation.navigate('user_report');
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <CarInfoCard id={id} car={car}/>
          <CarButtonPanel
            startReservation={startReservation}
            handleStartReservation={handleStartReservation}
            handleCarOpen={handleCarOpen}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});