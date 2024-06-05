import axios from 'axios';

const API_URL = 'http://localhost:8000/rest-auth/';

export const login = async (user) => {
    const response = await axios.post(API_URL + 'login/', {
        username: user.username,
        password: user.password
    });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

export const logout = () => {
    localStorage.removeItem('user');
}

export const register = async (user) => {
    const response = await axios.post(API_URL + 'registration/', {
        username: user.username,
        email: user.email,
        password1: user.password1,
        password2: user.password2
    });
    return response.data;
}
