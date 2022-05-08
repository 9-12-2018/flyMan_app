import { SafeAreaView, View, TextInput, Dimensions, StyleSheet, Button, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import GlobalContext from '../../components/globals/context'
import { login } from '../../api/users'

export default function LogInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { authUser } = useContext(GlobalContext);

    const userLogin = async () => {
        if (!email || !password) return;
        try {
            let response = await login(email, password);
            if (response.token) authUser(response.token);
        } catch (error) {
            openAlert();
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputSection}>
                <TextInput
                    style={styles.inputStyle}
                    value={email}
                    placeholder={'Email'}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.inputStyle}
                    value={password}
                    placeholder={'Password'}
                    onChangeText={setPassword}
                />
            </View>
            <View style={[styles.buttons]}>
                <Button
                    title={'Iniciar Sesion'}
                    onPress={userLogin}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputSection: {
        width: Dimensions.get('window').width - 15,
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        width: Dimensions.get('window').width - 100,
        fontSize: 20,
        marginTop: 25,
        borderBottomColor: "#4a628a",
        borderBottomWidth: 2
    },
    buttons: {
        width: Dimensions.get('window').width - 15,
        margin: 10
    },
    buttonNative: {
        height: 80,
        margin: 10
    }
});

const openAlert = () => Alert.alert('Ups!', 'Ocurrio un error al hacer login.', [{ text: 'OK', style: 'cancel' }]);