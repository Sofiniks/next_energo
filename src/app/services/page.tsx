import StatisticBanner from '@/components/banners/StatisticBanner';
import ContactForm from '@/components/contactForm/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pakalpojumi',
};

export default function ServicesPage() {
  return (
    <div>
      <HeroSection />
      <StatisticBanner />
      <ServicesSection />
      <ContactForm />
    </div>
  );
}
