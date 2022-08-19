import { Grid } from '@mui/material';
import React from 'react';
import { Props } from '../../types/types';

export default function LayoutVh({ children }: Props) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexGrow: 1,
        height: '100vh',
        alignItems: 'center'
      }}>
      {children}
    </Grid>
  );
}
