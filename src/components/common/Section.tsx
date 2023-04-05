import { Grid } from '@mui/material';
import React from 'react';
import { Children } from '../../types/types';

export default function Section({ children }: Children) {
  return (
    <Grid
      container
      sx={{
        flexGrow: 1,
        height: {
          lg: '100vh',
          xs: 'auto'
        },
        alignItems: 'center',
        margin: 0
      }}>
      {children}
    </Grid>
  );
}
