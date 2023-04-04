import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Link } from '@mui/material';

const icons = [
  {
    icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
    link: 'https://www.linkedin.com/in/pierre-louis-stanley-930110133/'
  },
  {
    icon: <TwitterIcon sx={{ fontSize: 40 }} />,
    link: 'https://twitter.com/pierrelStan'
  },
  {
    icon: <MailIcon sx={{ fontSize: 40 }} />,
    link: 'mailto:stanleypl75@gmail.com"'
  }
];

const Icons = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
      {icons.map((icon, index) => (
        <React.Fragment key={index}>
          <Link
            sx={{
              width: '100px',
              color: 'text.primary'
            }}
            href={icon.link}
            target="_blank">
            {icon.icon}
          </Link>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Icons;
