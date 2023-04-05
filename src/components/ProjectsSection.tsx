import React from 'react';
import { Box, Grid } from '@mui/material';
import { data } from '../lib/data';
import Title from './common/Title';
import Cards from './Cards';

export default function ProjectsSection() {
  return (
    <Box
      sx={{
        mt: 40
      }}>
      <Title title="Projects" />
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: 10
        }}>
        {data.map((card, index) => (
          <React.Fragment key={index}>
            <Cards card={card} />
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
