import axios from 'axios';
import { BASE_URL } from '../utils/connections';
import { retrieveToken } from '../services/secureStorage';

const fetchReservations = async () => {
    const url = `${BASE_URL}/reservations/app`;
    let response;
    let token = await retrieveToken();
    try {
        response = await axios.get(url, { headers: { 'Authorization': `Bearer ${token}` } });
    } catch (error) {
        throw error;
    }

    return response.data;
}

const fetchReservationById = async (id) => {
    const url = `${BASE_URL}/reservations/${id}`;
    let response;
    try {
        response = await axios.get(url);
    } catch (error) {
        throw error;
    }

    return response.data;
}

export {
  fetchReservations,
  fetchReservationById,
}