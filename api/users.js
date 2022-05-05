import axios from 'axios';

const BASE_URL = 'http://192.168.68.110:3000';

const login = async (email, password) => {
    const url = `${BASE_URL}/users/login`
    let response;
    try {
        response = await axios.post(url, { email, password });
    } catch (error) {
        throw error;
    }

    return response.data;
}

export { login }