import React from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarDetailScreen from '../../screens/CarDetailsScreen';
import UserReports from '../../screens/UserReports';
import LogInScreen from '../../screens/LogInScreen';
import Vehicles from '../../screens/Vehicles';
import GlobalContext from '../../components/globals/context';

const Stack = createNativeStackNavigator();

export default function index({ token, login, logout }) {
    const isAuthenticated = () => token;

    return (
        <GlobalContext.Provider value={{ login }}>
            <Stack.Navigator>
                {
                    (isAuthenticated())
                        ? (
                            <>
                                <Stack.Screen
                                    name='Reservas'
                                    component={Vehicles}
                                    options={{
                                        headerLeft: () => <Button title={"Log out"} onPress={() => logout()} />
                                    }}
                                />
                                <Stack.Screen name='car_detail' component={CarDetailScreen} options={{ title: 'Detalle del auto', headerBackTitle: 'Volver' }} />
                                <Stack.Screen name='user_report' component={UserReports} options={{ title: 'Reporte de Usuarios' }}/>
                            </>
                        )
                        : (
                            <Stack.Screen name='Iniciar Sesión' component={LogInScreen} />
                        )
                }
            </Stack.Navigator>
        </GlobalContext.Provider>
    )
}
