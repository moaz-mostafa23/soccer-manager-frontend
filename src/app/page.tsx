"use client";

import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { useUser } from '@/context/UserContext';

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <AppBar sx={{ width: '100%' }}>
        <Toolbar>
          <Typography>{`Hello ${user?.email}`}</Typography>
        </Toolbar>
      </AppBar>
      <Box>

      </Box>
    </div>
  );
}