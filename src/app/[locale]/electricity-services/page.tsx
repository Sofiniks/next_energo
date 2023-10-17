import StatisticBanner from '@/components/banners/StatisticBanner';
import ContactForm from '@/components/contactForm/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ServicesData from '@/data/electricityServicesData.json';
import { electricityDescription } from '../metadata';

export async function generateMetadata({
  params,
}: {
  params: {
    locale: string;
  };
}) {
  const description = (() => {
    switch (params.locale) {
      case 'lv':
        return electricityDescription.lv;
      case 'en':
        return electricityDescription.en;
      case 'ru':
        return electricityDescription.ru;
      default:
        return electricityDescription.lv;
    }
  })();
  return {
    title:
      params.locale === 'ru'
        ? 'Услуги'
        : params.locale === 'en'
        ? 'Services'
        : 'Pakalpojumi',
    description,
  };
}

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
