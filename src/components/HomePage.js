import React from 'react';
import ProgressTracker from './ProgressTracker';
import EngagementTracker from './EngagementTracker';
import Pricing from './Pricing';
import Testimonial from './Testimonial';
import Header from './Header';
import WebsiteFooter from './WebsiteFooter';
import HeroPage from './HeroPage';
  


const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroPage/>
      <ProgressTracker />
      <EngagementTracker />
      <Pricing />
      <Testimonial />
      <WebsiteFooter />
    </div>
  );
};

export default HomePage;

