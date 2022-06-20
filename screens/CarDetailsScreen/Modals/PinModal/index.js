import React from 'react'
import { Button, FormControl, Input, Modal, Text } from 'native-base';

export default function PinModal({ setPin, setShowModal, handlePin, pinLength }) {
  return (
    <Modal.Content maxWidth="300">
      <Modal.CloseButton onPress={() => setShowModal(false)} />
      <Modal.Header backgroundColor="#000000"><Text textAlign="center" color="#fff">Ingrese su PIN</Text></Modal.Header>
      <Modal.Body>
        <FormControl>
          <Input maxLength={4} onChangeText={(e) => setPin(e)} keyboardType="numeric" />
        </FormControl>
      </Modal.Body>
      <Modal.Footer>
        <Button.Group flex={1} justifyContent="center">
          <Button backgroundColor="#000000" justifyContent="center" onPress={() => handlePin()} isDisabled={pinLength < 4}>Enviar</Button>
        </Button.Group>
      </Modal.Footer>
    </Modal.Content>
  )
}
