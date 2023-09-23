import StatisticBanner from '@/components/banners/StatisticBanner';
import ContactForm from '@/components/contactForm/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pakalpojumi',
};

export default function ServicesPage() {
  return (
    <div>
      <HeroSection />
      <StatisticBanner />
      <WhyUsSection />
      <ContactForm />
    </div>
  );
}
