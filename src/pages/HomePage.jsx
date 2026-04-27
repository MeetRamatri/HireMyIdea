import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

import HowItWorksSection from '../components/HowItWorksSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-neutral-cream font-sans">
      {/* Navbar Section */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* HowItWorks Section */}
      <HowItWorksSection />
      
      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQs & App Download Section */}
      <FaqSection />

      {/* Footer Section */}
    </div>
  );
};

export default HomePage;
