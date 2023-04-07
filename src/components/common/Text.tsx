import { Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface ITextProps {
  flexGrow?: number | undefined;
  view?: { d?: 'none'; b?: 'block' };
  fontSize: {
    lg?: number | undefined;
    md?: number | undefined;
    sm?: number | undefined;
    xs?: number | undefined;
  };

  fontWeight?: number;
  variant: 'h1' | 'h2' | 'h6';
  mt?: number;
  mb?: number;
  children?: ReactNode;
  lineHeight?: number;
  textAlign?: 'right' | 'left' | 'inherit' | 'center' | 'justify';
}

export default function Text(props: ITextProps) {
  return (
    <Typography
      variant={props.variant}
      gutterBottom
      sx={{
        mb: props.mb,
        color: 'text.primary',
        fontSize: {
          lg: props.fontSize.lg,
          md: props.fontSize.md,
          sm: props.fontSize.sm,
          xs: props.fontSize.xs
        },
        textAlign: props.textAlign,
        fontWeight: props.fontWeight,
        flexGrow: props.flexGrow,
        display: {
          xs: props.view?.d,
          sm: props.view?.b
        }
      }}>
      {props.children}
    </Typography>
  );
}
