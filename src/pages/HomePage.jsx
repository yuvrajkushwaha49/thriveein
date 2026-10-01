import React from 'react';
import HeroBanner from '../components/HeroBanner';
import HomeAbout from '../components/HomeAbout';
import HomeServices from '../components/HomeServices';
import HomeFeatures from '../components/HomeFeatures';
import HomeWhyChooseUs from '../components/HomeWhyChooseUs';
import HomeWorkProcess from '../components/HomeWorkProcess';
import HomeCTA1 from '../components/HomeCTA1';
import HomeProjects from '../components/HomeProjects';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeVideo from '../components/HomeVideo';
import HomeBlog from '../components/HomeBlog';
import HomeCTA2 from '../components/HomeCTA2';

const HomePage = () => {
  return (
    <main className='main_class'>
      <HeroBanner />
      <HomeAbout />
      <HomeServices />
      <HomeFeatures />
      <HomeWhyChooseUs />
      <HomeWorkProcess />
      <HomeCTA1 />
      <HomeProjects />
      <HomeTestimonials />
      <HomeVideo />
      <HomeBlog />
      <HomeCTA2 />
    </main>
  );
};

export default HomePage;
