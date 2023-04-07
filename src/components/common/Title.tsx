import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
  align?: 'right' | 'left' | 'inherit' | 'center' | 'justify';
};

const Title = (props: Props) => {
  return (
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        color: 'text.primary',
        // textTransform: 'uppercase',
        mb: 10,
        fontWeight: 900,
        fontSize: [18, 40],
        textAlign: props.align
      }}
      id="projects">
      {props.title}
    </Typography>
  );
};

export default Title;
