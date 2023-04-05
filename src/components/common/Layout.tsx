import { Container } from '@mui/material';
import React from 'react';
import Footer from '../Footer';
import Header from './Header';

export default function Layout({ children }: any) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: {
          lg: '100vh',
          xs: 'auto'
        }
      }}>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
