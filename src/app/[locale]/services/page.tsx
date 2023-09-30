import { Metadata } from 'next';
import StatisticBanner from '@/components/banners/StatisticBanner';
import ContactForm from '@/components/contactForm/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';

export const metadata: Metadata = {
  title: 'Pakalpojumi',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <StatisticBanner />
      <ServicesSection />
      <ContactForm />
    </>
  );
}
