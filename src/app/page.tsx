import StatisticBanner from '@/components/banners/StatisticBanner';
import HeroSection from '@/components/sections/HeroSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ContactForm from '@/components/contactForm/ContactForm';

export default function Home() {
  return (
    <>
      <HeroSection isMainPage/>
      <StatisticBanner />
      <WhyUsSection />
      <ContactForm />
    </>
  );
}
