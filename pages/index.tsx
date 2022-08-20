import { Container } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import Layout from '../src/components/common/Layout';
import ProjectsSection from '../src/components/ProjectsSection';
import SectionHero from '../src/components/SectionHero';

const Home: NextPage = () => (
  <Container maxWidth="lg">
    <Layout>
      <SectionHero />
      <ProjectsSection />
    </Layout>
  </Container>
);

export default Home;
