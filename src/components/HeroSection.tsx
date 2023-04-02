import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

import Section from './common/Section';

export default function SectionHero() {
  return (
    <Section>
      <Grid
        container
        id="home"
        spacing={2}
        sx={{
          mt: 18
        }}>
        <Grid>
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
            My name is <strong>Stanley Pierre Louis</strong>, <br /> I build
            things for the <strong>Web</strong> and <br />
            <strong>Mobile</strong>.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
