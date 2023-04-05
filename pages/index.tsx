import type { NextPage } from 'next';
import React from 'react';
import Layout from '../src/components/common/Layout';
import SectionHero from '../src/components/HeroSection';
import ProjectsSection from '../src/components/ProjectsSection';
import SBottomNavigation from '../src/components/BottomNavigation';
import AboutSection from '../src/components/AboutSection';

const Home: NextPage = () => (
  <>
    <Layout>
      <SectionHero />
      <ProjectsSection />
      <AboutSection />
    </Layout>
    <SBottomNavigation />
  </>
);

export default Home;
