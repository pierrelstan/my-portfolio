import { Container } from '@mui/material';
import React from 'react';
import Footer from '../Footer';
import Header from './Header';

export default function Layout({ children }: any) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
      }}>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
