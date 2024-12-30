import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

const authApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

interface InputData {
    email: string;
    password: string;
}

export const login = async (data: InputData) => {
    try {
        const response = await authApi.post('/api/users/login', data);
        const token = response.data.user.token;
        localStorage.setItem('jwtToken', token);
        return response.data.user.user;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const register = async (data: InputData) => {
    try {
        const response = await authApi.post('/api/users/register', data);

        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

export const verifyEmail = async (data: any) => {
    try {
        const response = await authApi.post('/api/users/verify-email', data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Verification failed');
    }
};