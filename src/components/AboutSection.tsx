import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
// import LayoutVh from './common/Section';

export default function AboutSection() {
  return (
    <Box id="about">
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: 'text.secondary',
          pl: 3.4,
          mt: '40px'
        }}
        id="projects">
        ABOUT
      </Typography>
      {/* <LayoutVh> */}
      <Grid xs={12} sm={6}>
        <Image
          src={'/profile.svg'}
          objectFit="contain"
          alt="logo"
          width={350}
          height={350}
        />
      </Grid>
      <Grid xs={12} sm={6}>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.primary'
          }}>
          My name is <strong>Stanley Pierre Louis</strong> , I&apos;m a full
          stack web developer focusing on the mern Stack.
        </Typography>
      </Grid>
      {/* </LayoutVh> */}
    </Box>
  );
}
