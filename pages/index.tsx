import type { NextPage } from 'next';
import React from 'react';
import Layout from '../src/components/common/Layout';
import SectionHero from '../src/components/HeroSection';
import ProjectsSection from '../src/components/ProjectsSection';
import SBottomNavigation from '../src/components/BottomNavigation';

const Home: NextPage = () => (
  <>
    <Layout>
      <SectionHero />
      <ProjectsSection />
    </Layout>
    <SBottomNavigation />
  </>
);

export default Home;
