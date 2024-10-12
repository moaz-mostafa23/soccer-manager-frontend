"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { verifyEmail } from '@/services/authService'; // Trigger verify-email

const VerifyEmail = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (token) {
            verifyEmail(token)
                .then(() => {
                    setMessage('Your email has been successfully verified.');
                })
                .catch(() => {
                    setMessage('Email verification failed. The token may be invalid or expired.');
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setMessage('Invalid or missing verification token.');
            setLoading(false);
        }
    }, [token]);

    return (
        <Container maxWidth="sm">
            <Box mt={5} textAlign="center">
                {loading ? <CircularProgress /> : <Typography variant="h5">{message}</Typography>}
            </Box>
        </Container>
    );
};

export default VerifyEmail;
