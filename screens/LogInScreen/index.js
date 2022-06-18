import React, { useState, useContext } from 'react'
import { useToast, Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";
import { Dimensions, Alert } from 'react-native'
import GlobalContext from '../../components/globals/context'
import { login as apiLogin } from '../../api/users'

export default function LogInScreen() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(GlobalContext);

  const toast = useToast();
  const userLogin = async () => {
    if (!email || !password) return;
    try {
      let response = await apiLogin(email, password);
      if (response.token) login(response.token);
    } catch (error) {
      openAlert(error.message);
    }
  }
  const windowW = Dimensions.get("screen").width;

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box p="2" py="8" width={windowW}>
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
              color: "warmGray.50"
            }}>
              Flyman
            </Heading>
            <Heading mt="1" _dark={{
              color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
              Inicie sesión para continuar
            </Heading>
            <VStack space={1} mt="5">
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  value={email}
                  onChangeText={(e) => setEmail(e)}
                  placeholder="Ingrese su email"
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='email-address'
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Contraseña</FormControl.Label>
                <Input
                  type="password"
                  value={password}
                  onChangeText={(e) => setPassword(e)}
                  placeholder="Ingrese su contraseña"
                />
              </FormControl>
              <Button mt="2" backgroundColor="#000000" onPress={userLogin}>
                Iniciar Sesión
              </Button>
            </VStack>
          </Box>
        </Center>
      </Center>
    </NativeBaseProvider>
  );
}

const openAlert = (error) => {
  Alert.alert('Error', error, [{ text: 'OK', style: 'cancel' }]);
}