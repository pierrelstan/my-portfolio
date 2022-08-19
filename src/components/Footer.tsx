import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Stack from '@mui/material/Stack';

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  const Year = currentYear === 2022 ? '2022' : '2022 - ' + currentYear;
  return (
    <Stack direction="row" spacing={1}>
      <Container
        sx={{
          mt: '120px',
          textAlign: 'center'
        }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: '14px',
              color: 'primary.secondary',
              p: 1
            }}>
            © Copyright {Year}, Stanley Pierre Louis
          </Typography>
        </Box>
      </Container>
    </Stack>
  );
}
