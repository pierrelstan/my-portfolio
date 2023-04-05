import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Nav from './Nav';
import NavList from './NavList';

const IsHeaderDisplay = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block'
  }
}));

const IsDrawerDisplay = styled('div')(({ theme }) => ({
  display: 'block',
  margin: '10px',
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}));

export default function Header() {
  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary'
        }}>
        <IsHeaderDisplay>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
            <Toolbar>
              <Nav>
                <NavList />
              </Nav>
            </Toolbar>
          </Box>
        </IsHeaderDisplay>
      </AppBar>
    </>
  );
}
