// src/app/layout.tsx
import { ReactNode } from 'react';
import Head from 'next/head';
import { CssBaseline, Container } from '@mui/material';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Your App Name</title>
        <meta name="description" content="Login and registration app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <CssBaseline />
        <Container maxWidth="sm">
          {/* You can add a Navbar here if you want */}
          <main>{children}</main> {/* This is where the page content (login/register) will be rendered */}
        </Container>
      </body>
    </html>
  );
}
