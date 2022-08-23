import { Container } from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import AboutSection from '../src/components/AboutSection';
import Layout from '../src/components/common/Layout';
import ContactSection from '../src/components/ContactSection';
import ProjectsSection from '../src/components/ProjectsSection';
import SectionHero from '../src/components/SectionHero';

const Home: NextPage = () => (
  <Container maxWidth="lg">
    <Layout>
      <SectionHero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  </Container>
);

export default Home;
