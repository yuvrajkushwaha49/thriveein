import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import AboutCompany from '../components/AboutCompany';
import FunFacts from '../components/FunFacts';
import Testimonials from '../components/Testimonials';
import PromoBanner from '../components/PromoBanner';
import Sponsors from '../components/Sponsors';
import Team from '../components/Team';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb />
      <AboutCompany />
      <FunFacts />
      <Testimonials />
      <PromoBanner />
      <Sponsors />
      <Team />
      <CTA />
    </main>
  );
};

export default AboutPage;
