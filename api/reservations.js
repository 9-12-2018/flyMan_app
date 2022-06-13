import axios from 'axios';
import { BASE_URL } from '@env';
import { retrieveToken } from '../services/secureStorage';

const fetchReservations = async () => {
    const url = `${BASE_URL}/reservations/app`;
    try {
        const token = await retrieveToken();
        const response = await axios.get(url, { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const fetchReservationById = async (id) => {
    const url = `${BASE_URL}/reservations/${id}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export {
    fetchReservations,
    fetchReservationById,
}