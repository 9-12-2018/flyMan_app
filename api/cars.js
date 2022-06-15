import axios from 'axios';
import { retrieveToken } from '../services/secureStorage';
import { BASE_URL } from '@env'

const openCar = async () => {
    const url = `${BASE_URL}/cars/open`
    try {
        const token = await retrieveToken();
        const response = await axios.post(url, { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
}

const closeCar = async () => {
    const url = `${BASE_URL}/cars/close`
    try {
        const token = await retrieveToken();
        const response = await axios.post(url, { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
}

export { openCar, closeCar }