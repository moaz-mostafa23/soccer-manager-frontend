"use client";

import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { register } from '@/services/authService'; // Move API calls here

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register({ email, password });
            setSuccess(true);
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
                {!success ? (
                    <>
                        <Typography variant="h4" component="h1" align="center" gutterBottom>
                            Sign Up
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && (
                                <Typography color="error" sx={{ mt: 2 }}>
                                    {error}
                                </Typography>
                            )}
                            <Box mt={3}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Register
                                </Button>
                            </Box>
                        </form>
                    </>
                ) : (
                    <Typography variant="h6" align="center">
                        A verification link has been sent to your email. Please check your inbox.
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};

export default Register;
