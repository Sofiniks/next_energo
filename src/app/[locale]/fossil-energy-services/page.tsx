import StatisticBanner from '@/components/banners/StatisticBanner';
import ContactForm from '@/components/contactForm/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import fossilServicesData from '@/data/fossilServicesData.json';
import { fossilEnergyDescription } from '../metadata';

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
        return fossilEnergyDescription.lv;
      case 'en':
        return fossilEnergyDescription.en;
      case 'ru':
        return fossilEnergyDescription.ru;
      default:
        return fossilEnergyDescription.lv;
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
