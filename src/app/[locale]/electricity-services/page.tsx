import { Metadata } from 'next';
import StatisticBanner from '@/components/banners/StatisticBanner';
import ContactForm from '@/components/contactForm/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ServicesData from '@/data/electricityServicesData.json';

export const metadata: Metadata = {
  title: 'Pakalpojumi',
};

export default function ElectricityServicesPage() {
  return (
    <>
      <HeroSection
        sectionContent="electricityServicesSectionContent"
        sectionTitle="electricityServicesSectionTitle"
      />
      <StatisticBanner />
      <ServicesSection
        translationTitle="ServicesElectricity"
        servicesData={ServicesData}
      />
      <ContactForm />
    </>
  );
}
