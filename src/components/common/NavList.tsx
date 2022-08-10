import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Link from '../Link';

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  margin: '5px 15px',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center'
}));

const navItems = ['Home', 'Projects', 'Contact'];

export default function NavList() {
  return (
    <>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItems.map((item) => (
          <StyledLink
            key={item}
            variant="button"
            color="primary.main"
            href={`${item === 'Home' ? '/' : item.toLowerCase()}`}>
            <Button sx={{ color: '#000000' }}>{item}</Button>
          </StyledLink>
        ))}
      </Box>
    </>
  );
}
