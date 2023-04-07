import { Grid } from '@mui/material';
import React from 'react';
import { Children } from '../../types/types';

export default function Section({ children }: Children) {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        margin: 0
      }}>
      {children}
    </Grid>
  );
}
