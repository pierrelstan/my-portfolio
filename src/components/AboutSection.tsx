import React from 'react';
import { Grid, Typography } from '@mui/material';
import Icons from './common/Icons';
import Title from './common/Title';

export default function AboutSection() {
  return (
    <Grid
      id="about"
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
      <Title title="About" />
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          mt: 2,
          color: 'text.primary',
          fontSize: {
            lg: 40,
            md: 40,
            sm: 30,
            xs: 18
          }
        }}>
        I am a <strong>Full Stack Developer </strong> with expertise in{' '}
        <strong>web</strong> and <strong>mobile</strong> development . I&lsquo;m
        dedicated to developing interactive, user-friendly application .
        I&lsquo;m also proficient in troubleshooting complex issues, and
        implementing new features. If you are an employer looking to hire, feel
        free to get in touch.
      </Typography>
      <Icons />
    </Grid>
  );
}
