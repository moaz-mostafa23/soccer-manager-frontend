import axios from 'axios';

interface InputData {
    email: string;
    password: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const login = async (data: InputData) => {
    try {
        const response = await axios.post(
            `${API_URL}/api/users/login`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json', // Allow everything temporarily by using application/json
                },
                withCredentials: true, // Use this if you're sending credentials (like cookies)
            }
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const register = async (data: InputData) => {
    try {
        const response = await axios.post(`${API_URL}/api/users/register`, data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

export const verifyEmail = async (token: string) => {
    try {
        const response = await axios.post(`${API_URL}/api/users/verify-email`, { token });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Verification failed');
    }
};
