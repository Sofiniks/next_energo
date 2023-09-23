import StatisticBanner from "@/components/banners/StatisticBanner";
import HeroSection from "@/components/sections/HeroSection";
import MainBanner from "@/components/banners/MainBanner";
import ContactForm from "@/components/contactForm/ContactForm";

export default function Home() {
  return <div>
    <HeroSection/>
    <MainBanner/>
    <StatisticBanner/>
    <ContactForm/>
  </div>;
}
