import React from 'react'
import { Button, FormControl, Input, Modal } from 'native-base';

export default function PinModal({ setPin, setShowModal, handlePin, pinLength }) {
  return (
    <Modal.Content maxWidth="300">
      <Modal.CloseButton onPress={() => setShowModal(false)} />
      <Modal.Header>Ingrese su PIN</Modal.Header>
      <Modal.Body>
        <FormControl>
          <Input maxLength={4} onChangeText={(e) => setPin(e)} keyboardType="numeric"/>
        </FormControl>
      </Modal.Body>
      <Modal.Footer>
        <Button.Group flex={1} justifyContent="center">
          <Button justifyContent="center" onPress={() => handlePin()} isDisabled={pinLength < 4}>Enviar</Button>
        </Button.Group>
      </Modal.Footer>
    </Modal.Content>
  )
}
