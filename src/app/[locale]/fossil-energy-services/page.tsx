import { Metadata } from 'next';
import StatisticBanner from '@/components/banners/StatisticBanner';
import ContactForm from '@/components/contactForm/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import fossilServicesData from '@/data/fossilServicesData.json';

export const metadata: Metadata = {
  title: 'Pakalpojumi',
};

export default function FossilServicesPage() {
  return (
    <>
      <HeroSection
        sectionContent="fossilServicesSectionContent"
        sectionTitle="fossilServicesSectionTitle"
      />
      <StatisticBanner />
      <ServicesSection
        translationTitle="ServicesFossil"
        servicesData={fossilServicesData}
      />
      <ContactForm />
    </>
  );
}
