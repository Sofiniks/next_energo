import StatisticBanner from '@/components/banners/StatisticBanner';
import ContactForm from '@/components/contactForm/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ServicesData from '@/data/electricityServicesData.json';

export async function generateMetadata({
  params,
}: {
  params: {
    locale: string;
  };
}) {
  return {
    title:
      params.locale === 'ru'
        ? 'Услуги'
        : params.locale === 'en'
        ? 'Services'
        : 'Pakalpojumi',
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
