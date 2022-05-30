import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import CarDetailScreen from '../../screens/CarDetailsScreen';
import UserReports from '../../screens/UserReports';
import LogInScreen from '../../screens/LogInScreen';
import GlobalContext from '../../components/globals/context';
import { saveToken, retrieveToken, removeToken } from '../../services/secureStorage';
import Vehicles from '../../screens/Vehicles';

const Stack = createNativeStackNavigator();

export default function index() {
    const [token, setToken] = useState(null);

    useEffect(async () => {
        const token = await checkToken();
        setToken(token);
    }, []);


    const isAuthenticated = () => token;

    const authUser = (token) => {
        if (!token) throw new Error();
        setToken(token);
        saveToken(token);
    }

    const checkToken = async () => {
        const token = await retrieveToken();
        return token;
    }

    const logout = async () => {
        await removeToken();
        setToken(null);
    }

    return (
        <GlobalContext.Provider value={{ authUser }}>
            <Stack.Navigator initialRouteName='Reservas'>
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
                                <Stack.Screen name='Car Detail' component={CarDetailScreen} options={{ headerBackTitle: 'Volver' }} />
                                <Stack.Screen name='UserReports' component={UserReports} options={{ headerBackTitle: 'Volver' }} />
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
