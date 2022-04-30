import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import CarDetailScreen from '../../screens/CarDetailsScreen';
import LogInScreen from '../../screens/LogInScreen';

const Stack = createNativeStackNavigator();

export default function index() {
    return (
        <Stack.Navigator>
            {
                (true)
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
    )
}