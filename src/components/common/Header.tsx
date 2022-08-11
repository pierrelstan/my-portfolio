import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Nav from './Nav';
import NavList from './NavList';
import Hamburger from '../Hamburger';

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
        position="static"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: 'background.default',
          color: 'primary.main'
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
        <IsDrawerDisplay>
          <Hamburger />
        </IsDrawerDisplay>
      </AppBar>
    </>
  );
}
