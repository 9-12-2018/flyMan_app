import axios from 'axios';
import { BASE_URL } from '@env';
import { retrieveToken } from '../services/secureStorage';

const fetchService = async (plate, reservationId) => {
    const url = `${BASE_URL}/services/plate/${plate}/reservation/${reservationId}`;
    try {
        const token = await retrieveToken();
        const response = await axios.get(url, { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

const createService = async (service) => {
    const url = `${BASE_URL}/services`;
    try {
        const token = await retrieveToken();
        const response = await axios.post(url, service, { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export { fetchService, createService }