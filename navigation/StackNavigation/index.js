import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import CarDetailScreen from '../../screens/CarDetailsScreen';
import LogInScreen from '../../screens/LogInScreen';
import GlobalContext from '../../components/globals/context'

const Stack = createNativeStackNavigator();

export default function index() {
    const [token, setToken] = useState('')

    const isAuthenticated = () => token;

    const authUser = (token) => {
        if (!token) throw new Error();
        console.log('Aca deberia ir al secure storage');
        setToken(token);
    }

    return (
        <GlobalContext.Provider value={{ authUser }}>
            <Stack.Navigator>
                {
                    (isAuthenticated())
                        ? (
                            <>
                                <Stack.Screen name='Home' component={HomeScreen} />
                                <Stack.Screen name='Car Detail' component={CarDetailScreen} options={{ headerBackTitle: 'Volver' }} />
                            </>
                        )
                        : (
                            <Stack.Screen name='Log In' component={LogInScreen} />
                        )
                }
            </Stack.Navigator>
        </GlobalContext.Provider>
    )
}
