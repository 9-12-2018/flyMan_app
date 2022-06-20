import axios from 'axios';
import { BASE_URL } from '@env';
import { retrieveToken } from '../services/secureStorage';

export const fetchService = async (plate, reservationId) => {
    const url = `${BASE_URL}/services/plate/${plate}/reservation/${reservationId}`;
    try {
        const token = await retrieveToken();
        const response = await axios.get(url, { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        if(error.response.status != 404) throw new Error(error.response.data.error);
    }
}

export const createService = async (service) => {
    const url = `${BASE_URL}/services`;
    try {
        const token = await retrieveToken();
        const response = await axios.post(url, service, { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
}

export const updateService = async ({ id, body }) => {
    const url = `${BASE_URL}/services/${id}`;
    try {
        const token = await retrieveToken();
        const response = await axios.patch(url, body, { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
}
