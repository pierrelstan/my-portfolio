import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import Link from '../Link';
import { navLinks } from '../../lib/Navlinks';

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  margin: '10px 60px',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center'
}));

export default function NavList() {
  return (
    <>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navLinks.map((href, index) => (
          <StyledLink
            key={index}
            variant="button"
            color="primary.main"
            href={href.path}>
            <Button
              sx={{
                color: 'text.primary',
                fontWeight: 'bold',
                fontSize: 18
              }}>
              {href.name}
            </Button>
          </StyledLink>
        ))}
      </Box>
    </>
  );
}
