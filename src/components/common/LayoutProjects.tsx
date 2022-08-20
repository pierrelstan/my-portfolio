import { Grid } from '@mui/material';
import React from 'react';
import { Props } from '../../types/types';

export default function LayoutProjects({ children }: Props) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexGrow: 1,
        alignItems: 'center',
        margin: 0
      }}>
      {children}
    </Grid>
  );
}
