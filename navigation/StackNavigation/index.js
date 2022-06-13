import React from 'react';
import { Button, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarDetailScreen from '../../screens/CarDetailsScreen';
import UserReports from '../../screens/UserReports';
import LogInScreen from '../../screens/LogInScreen';
import Vehicles from '../../screens/Vehicles';
import GlobalContext from '../../components/globals/context';
import CustomButton from '../../components/CustomButton';

const Stack = createNativeStackNavigator();

export default function index({ token, login, logout }) {
    const isAuthenticated = () => token;

    return (
        <GlobalContext.Provider value={{ login }}>
            <Stack.Navigator
                screenOptions={{
                    // headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#000000' },
                }}
            >
                {
                    (isAuthenticated())
                        ? (
                            <>
                                <Stack.Screen
                                    name='Reservas'
                                    component={Vehicles}
                                    options={{
                                        headerTitleAlign: 'center',
                                        headerLeft: () => <CustomButton onPress={() => logout()} text="Log out" txtColor="#fff" />
                                    }}
                                />
                                <Stack.Screen name='car_detail' component={CarDetailScreen} options={{
                                    title: 'Detalle del auto',
                                    headerBackTitle: 'Volver',
                                    headerTitleAlign: 'center',
                                }} />
                                <Stack.Screen name='user_report' component={UserReports} options={{
                                    title: 'Reporte de Usuarios',
                                    headerBackVisible: false,
                                    headerTitleAlign: 'center',
                                }} />
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
