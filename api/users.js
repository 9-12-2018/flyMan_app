import axios from 'axios';
import { retrieveToken } from '../services/secureStorage';
import { BASE_URL } from '@env'

const login = async (email, password) => {
    const url = `${BASE_URL}/users/login`
    let response;
    try {
        response = await axios.post(
            url, 
            { email, password }
        );
    } catch (error) {
        throw error;
    }

    return response.data;
}
const checkPin = async (pin) => {
    const url = `${BASE_URL}/users/pin`;
    const token = await retrieveToken();
    let response;
    try {
      response = await axios.post(
        url,
        { pin },
        { headers: { 'Authorization': `Bearer ${token}` }});
    } catch (error) {
        throw error;
    }

    return response.data;
}

export { login, checkPin }