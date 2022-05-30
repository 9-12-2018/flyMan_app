import { SafeAreaView, View, TextInput, Dimensions, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalContext from '../../components/globals/context'
import { login as apiLogin } from '../../api/users'

export default function LogInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const PASSWORD_VISIBLE = 'eye';
    const PASSWORD_NOT_VISIBLE = 'eye-slash';

    const { login } = useContext(GlobalContext);

    const userLogin = async () => {
        if (!email || !password) return;
        try {
            let response = await apiLogin(email, password);
            if (response.token) login(response.token);
        } catch (error) {
            openAlert();
        }
    }

    const onPress = () => setIsPasswordVisible(prev => !prev);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputSection}>
                <TextInput
                    style={styles.inputStyle}
                    value={email}
                    placeholder={'Email'}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInputStyle}
                        value={password}
                        placeholder={'Password'}
                        onChangeText={setPassword}
                        secureTextEntry={isPasswordVisible}
                    />
                    <TouchableOpacity
                        onPress={onPress}
                    >
                        <Icon
                            name={isPasswordVisible ? PASSWORD_VISIBLE : PASSWORD_NOT_VISIBLE}
                            size={20}
                            color="#418df0"
                        />
                    </TouchableOpacity>
                </View>
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
    passwordContainer: {
        width: Dimensions.get('window').width - 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderBottomColor: "#4a628a",
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    passwordInputStyle: {
        flex: 1,
        fontSize: 20,
        marginTop: 25,
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