import React from 'react';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import CarDetailScreen from '../../screens/CarDetailsScreen';
import UserReports from '../../screens/UserReports';
import LogInScreen from '../../screens/LogInScreen';
import GlobalContext from '../../components/globals/context';
import { saveToken, removeToken } from '../../services/secureStorage';

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
