import StatisticBanner from '@/components/banners/StatisticBanner';
import HeroSection from '@/components/sections/HeroSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ContactForm from '@/components/contactForm/ContactForm';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <HeroSection isMainPage />
      <StatisticBanner />
      <WhyUsSection />
      <ContactForm />
    </Suspense>
  );
}
