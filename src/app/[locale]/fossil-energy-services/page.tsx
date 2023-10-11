import StatisticBanner from '@/components/banners/StatisticBanner';
import ContactForm from '@/components/contactForm/ContactForm';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import fossilServicesData from '@/data/fossilServicesData.json';

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
