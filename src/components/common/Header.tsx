import React from 'react';
import { AppBar, Toolbar, Box, CssBaseline, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Nav from './Nav';
import NavList, { StyledLink } from './NavList';

const IsHeaderDisplay = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block'
  }
}));

export default function Header() {
  return (
    <Box>
      <CssBaseline />
      <IsHeaderDisplay>
        <AppBar
          position="fixed"
          elevation={0}
          enableColorOnDark={true}
          sx={{
            color: 'text.primary',
            backgroundColor: '#fff'
          }}
          component="nav">
          <Toolbar>
            <StyledLink variant="button" color="primary.main" href="/">
              <Button
                sx={{
                  color: 'text.primary',
                  fontWeight: 'bold',
                  fontSize: 30,
                  textTransform: 'none'
                }}>
                Stanley.
              </Button>
            </StyledLink>
            <Nav>
              <NavList />
            </Nav>
          </Toolbar>
        </AppBar>
      </IsHeaderDisplay>
    </Box>
  );
}
