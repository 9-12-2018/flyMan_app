import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import CarDetailScreen from '../../screens/CarDetailsScreen';
import UserReports from '../../screens/UserReports';
import LogInScreen from '../../screens/LogInScreen';
import GlobalContext from '../../components/globals/context';
import { saveToken, retrieveToken, removeToken } from '../../services/secureStorage';

const Stack = createNativeStackNavigator();

export default function index() {
    const [token, setToken] = useState('');

    useEffect(async () => {
        const token = await checkToken();
        setToken(token);
    }, []);


    const isAuthenticated = () => token;

    const authUser = (token) => {
        if (!token) throw new Error();
        console.log('Aca deberia ir al secure storage');
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
            <Stack.Navigator>
                {
                    (true)
                        ? (
                            <>
                                <Stack.Screen
                                    name='Home'
                                    component={HomeScreen}
                                    options={{
                                        headerLeft: () => <Button title={"Log out"} onPress={async () => { await logout() }} />
                                    }}
                                />
                                <Stack.Screen name='Car Detail' component={CarDetailScreen} options={{ headerBackTitle: 'Volver' }} />
                                <Stack.Screen name='UserReports' component={UserReports} options={{ headerBackTitle: 'Volver' }} />
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
