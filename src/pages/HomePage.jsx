import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ComparisonSection from '../components/ComparisonSection';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';
import AppDownloadSection from '../components/AppDownloadSection';
import FooterSection from '../components/FooterSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#faf7f1] font-sans">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PricingSection />
      <FaqSection />
      <AppDownloadSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
