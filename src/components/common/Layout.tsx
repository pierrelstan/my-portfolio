import { Container } from '@mui/material';
import React from 'react';
import Header from './Header';

export default function Layout({ children }: any) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto'
      }}>
      <Header />
      {children}
    </Container>
  );
}
