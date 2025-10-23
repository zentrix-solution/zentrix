import HeroSection from '@/components/HeroSection';
import ServiceCards from '@/components/ServiceCards';
import StatsSection from '@/components/StatsSection';
import FeatureHighlight from '@/components/FeatureHighlight';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import CoverageMap from '@/components/CoverageMap';
import PricingSection from '@/components/PricingSection';
import NewsletterSection from '@/components/NewsletterSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import StickyHeader from '@/components/StickyHeader';
import { Button } from '@/components/ui/button';
import { useScrollToTopOnMount } from '@/hooks/useScrollToTopOnMount';

export default function Index() {
  useScrollToTopOnMount();
  
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <ServiceCards />
      <StatsSection />
      <FeatureHighlight />
      <WhyChooseUs />
      <HowItWorks />
      <CoverageMap />
      <PricingSection />
      <NewsletterSection />
      <FAQSection />
      <Footer />
    </div>
  );
}