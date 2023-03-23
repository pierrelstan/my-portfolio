import { Grid } from '@mui/material';
import React from 'react';
import { Props } from '../../types/types';

export default function Section({ children }: Props) {
  return (
    <Grid
      container
      spacing={2}
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
