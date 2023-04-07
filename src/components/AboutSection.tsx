import React from 'react';
import { Container, Grid } from '@mui/material';
import Icons from './common/Icons';
import Title from './common/Title';
import Text from './common/Text';

export default function AboutSection() {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: {
          lg: '100vh',
          sm: 'auto'
        }
      }}>
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
        <Text
          variant="h2"
          mt={2}
          fontSize={{
            lg: 30,
            md: 25,
            sm: 18,
            xs: 18
          }}>
          I am a <strong>Full Stack Developer </strong> with expertise in{' '}
          <strong>web</strong> and <strong>mobile</strong> development .
          I&lsquo;m dedicated to developing interactive, user-friendly
          application . I&lsquo;m also proficient in troubleshooting complex
          issues, and implementing new features. If you are an employer looking
          to hire, feel free to get in touch.
        </Text>
        <Icons />
      </Grid>
    </Container>
  );
}
