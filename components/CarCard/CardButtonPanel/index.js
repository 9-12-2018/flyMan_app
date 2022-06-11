import React from 'react'
import { Button, HStack } from 'native-base';
import ICON_NAME from '../../../utils/icons';
import CarButton from '../../CarButton';

export default function CarButtonPanel({
  service,
  handleStartReservation,
  handleCarOpen,
  carOpen,
  handleEndReseration,
}) {

  const car_buttons = [
    {
      style: { backgroundColor: 'green' },
      icon: 'UNLOCK',
      onPress: () => handleCarOpen(true),
      disabled: carOpen,
    },
    {
      style: { backgroundColor: 'red' },
      icon: 'LOCK',
      onPress: () => handleCarOpen(false),
      disabled: !carOpen,
    }
  ]

  if (!service) {
    return (
      <CarButton
        title="Iniciar Servicio"
        onPress={handleStartReservation}
      />
    )
  } else {
    return (
      <>
        <HStack mt="5">
          {car_buttons.map(cb => (
            <CarButton
              propStyle={cb.style}
              icon={ICON_NAME[cb.icon]}
              onPress={cb.onPress}
              isDisabled={cb.disabled}
            />
          ))}
        </HStack>
        {!carOpen && <Button onPress={handleEndReseration}>Terminar reserva</Button>}
      </>
    )
  }

  return <span></span>;


}
