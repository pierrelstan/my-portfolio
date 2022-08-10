import { Container } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import image from '../public/static/maintenance.png';
import Layout from '../src/components/common/Layout';
import Maintenance from '../src/components/common/Maintenance';

const Home: NextPage = () => (
  <Container maxWidth="lg">
    <Layout>
      <Maintenance image={image as any} />
    </Layout>
  </Container>
);

export default Home;
