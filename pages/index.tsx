import { Container } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import Layout from '../src/components/common/Layout';
import SectionHero from '../src/components/SectionHero';

const Home: NextPage = () => (
  <Container maxWidth="lg" sx={{}}>
    <Layout>
      <SectionHero />
    </Layout>
  </Container>
);

export default Home;
