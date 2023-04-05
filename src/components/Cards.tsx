import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import OpenInNew from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from './Link';
import { Cards } from '../types/types';
import { CardHeader } from '@mui/material';

const Cards = (props: Cards) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        boxShadow: 'none',
        border: '1px solid #333',
        borderRadius: '50px'
      }}
      raised={false}>
      <CardHeader />
      <CardMedia
        sx={{
          filter: `${props.card.completed ? 'blur(0px)' : 'blur(20px)'} `
        }}>
        <Image
          src={props.card.image as any}
          objectFit="contain"
          alt="card-image"
          width={600}
          height={600}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.card.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            filter: `${props.card.completed ? 'blur(0px)' : 'blur(10px)'} `
          }}>
          {props.card.description}
        </Typography>
        {!props.card.completed && (
          <Typography
            variant="subtitle1"
            sx={{
              color: 'red',
              position: 'relative'
            }}>
            Coming soon
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Link
          href={props.card.demo}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            p: 1,
            filter: `${
              props.card.completed && !props.card.isMobile
                ? 'blur(0px)'
                : 'blur(10px)'
            } `
          }}>
          <OpenInNew />
        </Link>
        <Link
          href={props.card.repo}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            p: 1,
            filter: `${props.card.completed ? 'blur(0px)' : 'blur(10px)'} `,
            color: 'text.secondary',
            '&:hover': {
              color: 'text.secondary'
            }
          }}>
          <GitHubIcon />
        </Link>
      </CardActions>
    </Card>
  );
};

export default Cards;
