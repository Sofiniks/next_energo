import './globals.css';
import { Montserrat } from 'next/font/google';
// import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import StyledComponentsRegistry from '@/lib/registry';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
});
const locales = ['en', 'ru', 'lv'];

export function generateStaticParams() {
  return [{ locale: 'lv' }, { locale: 'en' }, { locale: 'ru' }];
}

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
        return 'Mēs specializējamies enerģijas sertifikācijā un revīzijās. Saņemiet ilgtspējīgus risinājumus jau tagad!';
      case 'en':
        return 'We specialize in energy certification and audits. Get sustainable solutions now!';
      case 'ru':
        return 'Мы специализируемся на энергетической сертификации и аудитах. Получите устойчивые решения уже сейчас!';
      default:
        return 'Mēs specializējamies enerģijas sertifikācijā un revīzijās. Saņemiet ilgtspējīgus risinājumus jau tagad!';
    }
  })();
  const keywords = (() => {
    switch (params.locale) {
      case 'lv':
        return [
          'Enerģijas sertifikācija',
          'Enerģijas revīzijas',
          'Termogrāfija',
          'Energoefektivitāte',
          'Ilgtspējīgi risinājumi',
          'ISO sertifikācija',
          'Tehniskā pārbaude',
          'Enerģijas pārvaldes sistēmas',
          'Termogrāfisks izpētes metods',
          'Ēku inspekcijas',
          'Sildīšanas un ventilācijas efektivitāte',
          'Rūpnieciskie enerģijas auditi',
        ];
      case 'en':
        return [
          'Energy Certification',
          'Energy Audits',
          'Thermography',
          'Energy Efficiency',
          'Sustainable Solutions',
          'ISO Certification',
          'Technical Examination',
          'Energy Management Systems',
          'Thermal Imaging',
          'Building Inspections',
          'Heating Efficiency',
          'Industrial Energy Audits',
        ];
      case 'ru':
        return [
          'Сертификация энергии',
          'Энергетические аудиты',
          'Термография',
          'Энергоэффективность',
          'Устойчивые решения',
          'Сертификация ISO',
          'Техническое обследование',
          'Системы управления энергией',
          'Тепловизия',
          'Инспекции зданий',
          'Эффективность отопления',
          'Энергетические аудиты промышленных предприятий',
        ];
      default:
        return [
          'Enerģijas sertifikācija',
          'Enerģijas revīzijas',
          'Termogrāfija',
          'Energoefektivitāte',
          'Ilgtspējīgi risinājumi',
          'ISO sertifikācija',
          'Tehniskā pārbaude',
          'Enerģijas pārvaldes sistēmas',
          'Termogrāfisks izpētes metods',
          'Ēku inspekcijas',
          'Sildīšanas un ventilācijas efektivitāte',
          'Rūpnieciskie enerģijas auditi',
        ];
    }
  })();

  return {
    metadataBase: new URL('https://sofiniks.store/'),
    title: {
      default: 'Energo',
      template: '%s | Energo',
    },
    description,
    languages: {
      en: `/en/`,
      ru: `/ru/`,
    },
    keywords,
    openGraph: {
      images: '/opengraph-image.png',
    },
    // manifest: 'https://sofiniks.store/manifest.json',
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
    },
  };
}

// export const metadata: Metadata = {
//   title: {
//     default: 'Energo',
//     template: '%s | Energo',
//   },
//   description: 'Pakalpojumi ar fosilo enerģiju',
// };

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StyledComponentsRegistry>
            <PageLayout>
              <Header />
              {children}
              <Footer />
            </PageLayout>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
