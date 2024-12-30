import axios from 'axios';

interface InputData {
    email: string;
    password: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL!

export const login = async (data: InputData) => {
    try {
        const response = await axios.post(
            `${API_URL}/api/users/login`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            }
        );
        const token = response.data.user.token;
        localStorage.setItem('jwtToken', token);
        return response.data.user.user;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const register = async (data: InputData) => {
    try {
        const response = await axios.post(
            `${API_URL}/api/users/register`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

export const verifyEmail = async (data: any) => {
    try {
        const response = await axios.post(
            `${API_URL}/api/users/verify-email`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Verification failed');
    }
};