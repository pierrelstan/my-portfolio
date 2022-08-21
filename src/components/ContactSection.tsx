import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import LayoutVh from './common/LayoutVh';
import LogoMail from '../../public/mail.svg';
import Link from './Link';

export default function ContactSection() {
  return (
    <Box id="contact">
      <LayoutVh>
        <Grid xs={12} sm={8}>
          <Image
            src={LogoMail as any}
            objectFit="contain"
            alt="logo"
            width={350}
            height={350}
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <Typography
            variant="h4"
            sx={{
              color: 'text.primary'
            }}>
            Let&apos;s have a chat
          </Typography>
          <Box
            sx={{
              display: 'flex'
            }}>
            <Box>
              <Link
                href="https://linkedin.com/in/pierre-louis-stanley-930110133"
                target="_blank">
                <LinkedInIcon
                  sx={{
                    fontSize: 70,
                    m: 2,
                    color: '#3c3f4e'
                  }}
                />
              </Link>
            </Box>
            <Box>
              <Link href="https://twitter.com/pierrelStan" target="_blank">
                <TwitterIcon
                  sx={{
                    fontSize: 70,
                    m: 2,
                    color: '#3c3f4e'
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>
      </LayoutVh>
    </Box>
  );
}
