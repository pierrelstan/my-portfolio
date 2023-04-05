import * as React from 'react';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import { BottomNavigation, styled } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';

import { NextLinkComposed } from '../components/Link';

const IsDrawerDisplay = styled('div')(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}));

export default function SBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <IsDrawerDisplay>
      <Box
        sx={{
          width: '100%',
          position: 'fixed',
          bottom: 0
        }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            color: 'text.primary',
            flexDirection: 'row',
            '& .css-17owlhv-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected':
              { color: 'text.secondary' }
          }}>
          <BottomNavigationAction
            label="Home"
            component={NextLinkComposed}
            icon={<HomeIcon />}
            to={'/'}
            sx={{
              color: 'text.primary'
            }}
          />
          <BottomNavigationAction
            label="Projects"
            component={NextLinkComposed}
            icon={<WorkIcon />}
            to={'#projects'}
            sx={{
              color: 'text.primary'
            }}
          />
          <BottomNavigationAction
            label="Contact"
            component={NextLinkComposed}
            icon={<AlternateEmailIcon />}
            to={'#contact'}
            sx={{
              color: 'text.primary'
            }}
          />
          <BottomNavigationAction
            label="About"
            component={NextLinkComposed}
            icon={<InfoIcon />}
            to={'#about'}
            sx={{
              color: 'text.primary'
            }}
          />
        </BottomNavigation>
      </Box>
    </IsDrawerDisplay>
  );
}
