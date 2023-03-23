import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

import Section from './common/Section';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3)
}));

export default function SectionHero() {
  return (
    <Section>
      <Grid
        container
        id="home"
        spacing={2}
        sx={{
          mt: 7
        }}>
        <Grid>
          <Item>
            <Typography
              variant="h1"
              sx={{
                color: 'text.primary',
                fontSize: {
                  lg: 200,
                  md: 200,
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
                  lg: 100,
                  md: 70,
                  sm: 60,
                  xs: 20
                }
              }}>
              My name is <strong>Stanley</strong>. <br /> I build things for the{' '}
              <strong>Web</strong>, and <strong>Mobile</strong>.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Section>
  );
}
