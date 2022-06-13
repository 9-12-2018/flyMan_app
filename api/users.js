import axios from 'axios';
import { retrieveToken } from '../services/secureStorage';
import { BASE_URL } from '@env'

const login = async (email, password) => {
    const url = `${BASE_URL}/users/login`
    try {
        const response = await axios.post(
            url,
            { email, password }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}
const checkPin = async (pin) => {
    const url = `${BASE_URL}/users/pin`;
    const token = await retrieveToken();
    try {
        const response = await axios.post(
            url,
            { pin },
            { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { login, checkPin }