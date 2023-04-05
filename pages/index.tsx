import type { NextPage } from 'next';
import React from 'react';
import Layout from '../src/components/common/Layout';
import SectionHero from '../src/components/HeroSection';
import ProjectsSection from '../src/components/ProjectsSection';

const Home: NextPage = () => (
  <>
    <Layout>
      <SectionHero />
      <ProjectsSection />
    </Layout>
  </>
);

export default Home;
