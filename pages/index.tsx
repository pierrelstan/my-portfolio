import { Container } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import Layout from '../src/components/common/Layout';
import SectionHero from '../src/components/HeroSection';

const Home: NextPage = () => (
  <Container maxWidth="lg">
    <Layout>
      <SectionHero />
    </Layout>
  </Container>
);

export default Home;
