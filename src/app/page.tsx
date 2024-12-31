"use client";

import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { useUser } from '@/context/UserContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import GenerateTeamDialog from '@/components/generateTeam';

export default function Home() {
  const { user } = useUser();

  return (
    <ProtectedRoute>
      <div>
        <AppBar sx={{ width: '100%' }}>
          <Toolbar>
            <Typography>{`Hello ${user?.email}`}</Typography>
          </Toolbar>
          <GenerateTeamDialog />
        </AppBar>
        <Box>
        </Box>
      </div>
    </ProtectedRoute>
  );
}