import React from 'react';
import HeroSection from '../Components/homepage/HeroSection';
import FeaturedSection from '../Components/Homepage/FeaturedSection';
import NewArrivalsSection from '../Components/Homepage/NewArrivalsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <NewArrivalsSection />
    </div>
  );
};

export default Home;
