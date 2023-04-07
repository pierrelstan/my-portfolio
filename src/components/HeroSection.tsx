import { Grid, Typography } from '@mui/material';
import React from 'react';
import Icons from './common/Icons';
import Text from './common/Text';
import Section from './common/Section';

export default function SectionHero() {
  return (
    <Section>
      <Grid
        id="home"
        sx={{
          // mt: [0, 18],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
        <Text
          variant="h1"
          fontSize={{
            lg: 140,
            md: 130,
            sm: 100,
            xs: 70
          }}
          mb={1}
          fontWeight={800}
          textAlign="center">
          {' '}
          Hey!
        </Text>

        <Text
          variant="h2"
          fontSize={{
            lg: 30,
            md: 25,
            sm: 18,
            xs: 18
          }}
          lineHeight={1.5}
          textAlign="center">
          My name is <strong>Stanley Pierre Louis</strong> ,<br /> I build
          things for the <strong>Web</strong> and <strong>Mobile</strong>
        </Text>
        <Icons align="center" />
      </Grid>
    </Section>
  );
}
