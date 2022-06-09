import axios from 'axios';
import { BASE_URL } from '@env';
import { retrieveToken } from '../services/secureStorage';

const fetchService = async (id) => {
    const url = `${BASE_URL}/services/${id}`;
    try {
        console.log(url);
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { fetchService }