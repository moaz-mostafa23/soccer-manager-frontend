"use client";

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { verifyEmail } from '@/services/authService';

const VerifyEmail = () => {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const searchParams = useSearchParams();
    const verificationToken = searchParams?.get('token');
    console.log('reiefwfew');

    useEffect(() => {
        if (verificationToken) {
            verifyEmail({ token: verificationToken })
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
    }, [verificationToken]);

    return (
        <Container maxWidth="sm">
            <Box mt={5} textAlign="center">
                {loading ? (
                    <CircularProgress />
                ) : (
                    <Typography variant="h5">{message}</Typography>
                )}
            </Box>
        </Container>
    );
};

const VerifyEmailWrapper = () => (
    <Suspense fallback={<CircularProgress />}>
        <VerifyEmail />
    </Suspense>
);

export default VerifyEmailWrapper;
