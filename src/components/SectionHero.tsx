import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import LayoutVh from './common/LayoutVh';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  color: theme.palette.text.secondary
}));

export default function SectionHero() {
  return (
    <LayoutVh>
      <Grid xs={12} sm={8} id="home">
        <Item>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: 'text.primary'
            }}>
            Hi, I&apos;m Stanley!
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary'
            }}
            gutterBottom>
            I build things for the web
          </Typography>
        </Item>
      </Grid>
      <Grid xs={12} sm={4}>
        <Item>
          <Image
            src={'/webDeveloper.svg'}
            objectFit="contain"
            alt="logo"
            width={350}
            height={350}
          />
        </Item>
      </Grid>
    </LayoutVh>
  );
}
