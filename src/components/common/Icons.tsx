import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Link } from '@mui/material';

const icons = [
  {
    icon: <LinkedInIcon sx={{ fontSize: { lg: 40, md: 40, sm: 30 } }} />,
    link: 'https://www.linkedin.com/in/pierre-louis-stanley-930110133/'
  },
  {
    icon: <TwitterIcon sx={{ fontSize: { lg: 40, md: 40, sm: 30 } }} />,
    link: 'https://twitter.com/pierrelStan'
  },
  {
    icon: <MailIcon sx={{ fontSize: { lg: 40, md: 40, sm: 30 } }} />,
    link: 'mailto:stanleypl75@gmail.com'
  }
];

interface IConsProps {
  align?: string;
}
const Icons = (props: IConsProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: props.align,
        gap: 5,
        mt: 1
      }}>
      {icons.map((icon, index) => (
        <React.Fragment key={index}>
          <Link
            sx={{
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
