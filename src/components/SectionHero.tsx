import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import LogoDev from '../../public/static/logoDeveloper.svg';
import LayoutVh from './common/LayoutVh';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  color: theme.palette.text.secondary
}));

export default function SectionIntro() {
  return (
    <LayoutVh>
      <Grid xs={8}>
        <Item>
          <Typography variant="h3" gutterBottom>
            Hi I&apos;m Stanley | Full Stack Developer
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
      <Grid xs={4}>
        <Item>
          <Image
            src={LogoDev as any}
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
