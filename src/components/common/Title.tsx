import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
};

const Title = (props: Props) => {
  return (
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        color: 'text.primary',
        textTransform: 'uppercase',
        mb: 10,
        fontWeight: 900,
        fontSize: [30, 70]
      }}
      id="projects">
      {props.title}
    </Typography>
  );
};

export default Title;
