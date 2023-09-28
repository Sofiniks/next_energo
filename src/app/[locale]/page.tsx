import StatisticBanner from '@/components/banners/StatisticBanner';
import HeroSection from '@/components/sections/HeroSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ContactForm from '@/components/contactForm/ContactForm';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Hero');
  return (
    <>
      <HeroSection isMainPage />
      <h1>{t('title')}</h1>
      <StatisticBanner />
      <WhyUsSection />
      <ContactForm />
    </>
  );
}
