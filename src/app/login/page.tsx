"use client";

import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { login } from '@/services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login({ email, password });
            router.push('/');
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Sign In
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
                            Login
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
