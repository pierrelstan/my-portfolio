import { Grid, Typography } from '@mui/material';
import React from 'react';
import Icons from './common/Icons';

export default function SectionHero() {
  return (
    <Grid
      id="home"
      sx={{
        mt: [0, 18],
        display: 'flex',
        flexDirection: 'column',
        height: {
          lg: 'auto',
          xs: '100vh'
        },
        justifyContent: 'center'
      }}>
      <Typography
        variant="h1"
        sx={{
          color: 'text.primary',
          fontSize: {
            lg: 140,
            md: 130,
            sm: 100,
            xs: 70
          },
          fontWeight: 800
        }}>
        Hey!
      </Typography>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          mt: 2,
          color: 'text.primary',
          fontSize: {
            lg: 60,
            md: 60,
            sm: 60,
            xs: 20
          }
        }}>
        My name is <strong>Stanley Pierre Louis</strong>, <br /> I build things
        for the <strong>Web</strong> and <br />
        <strong>Mobile</strong>.
      </Typography>
      <Icons />
    </Grid>
  );
}
