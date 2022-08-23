import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import OpenInNew from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

import LayoutProjects from './common/LayoutProjects';
import image from '../../public/static/logoDeveloper.svg';
import Link from './Link';

const Data = [
  {
    title: 'E-Commerce',
    image: '/storeLogo.png',
    description: `A full-stack E-Commerce Web App Build with the MERN STACK`,
    demo: 'https://pierrelstan.github.io/shopwitapp-frontend/#/shopwitapp-frontend/',
    repo: 'https://github.com/pierrelstan/shopwitapp-frontend',
    completed: true
  },
  {
    title: 'Reddit Timer',
    image: '/redditLogo.png',
    description:
      'A Web app for professional content creators, build with Reactjs.',
    repo: 'https://github.com/pierrelstan/reddit-timer-pierrelstan',
    demo: 'reddit-timer-stanley.netlify.app',
    completed: true
  },
  {
    title: 'Bug Tracker',
    image: `${image}`,
    description: '',
    repo: 'github',
    demo: 'Demo',
    completed: false
  }
];

export default function ProjectsSection() {
  return (
    <Box>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: 'text.secondary',
          pl: 3.4
        }}
        id="projects">
        PROJECTS
      </Typography>
      <LayoutProjects>
        {Data.map((data, index) => (
          <Grid xs={12} sm={4} key={index} p={3}>
            <Card
              sx={{
                maxWidth: 300
              }}>
              <CardMedia
                sx={{
                  filter: `${data.completed ? 'blur(0px)' : 'blur(20px)'} `
                }}>
                <Image
                  src={data.image as any}
                  objectFit="contain"
                  alt="card-image"
                  width={300}
                  height={300}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    filter: `${data.completed ? 'blur(0px)' : 'blur(10px)'} `
                  }}>
                  {data.description}
                </Typography>
                {!data.completed && (
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'red',
                      position: 'relative',
                      zIndex: 2
                    }}>
                    Coming soon
                  </Typography>
                )}
              </CardContent>
              <CardActions
                sx={{
                  filter: `${data.completed ? 'blur(0px)' : 'blur(10px)'} `
                }}>
                <Link
                  href={`${data.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'none',
                    p: 1
                  }}>
                  <OpenInNew />
                </Link>
                <Link
                  href={`${data.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'none',
                    p: 1,
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'text.secondary'
                    }
                  }}>
                  <GitHubIcon />
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </LayoutProjects>
    </Box>
  );
}
