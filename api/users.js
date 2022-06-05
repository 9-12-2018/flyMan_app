import axios from 'axios';
import { BASE_URL } from '@env'

const login = async (email, password) => {
    const url = `${BASE_URL}/users/login`
    try {
        let response = await axios.post(url, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { login }