import './globals.css';
import { Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { FacebookPixelEvents } from '@/components/pixel-events';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import StyledComponentsRegistry from '@/lib/registry';
import {latvianKeywords, englishKeywords, russianKeywords} from './keywords'
import { Suspense } from 'react';
import GoogleAnalytics from './GoogleAnalytics';

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
        return latvianKeywords;
      case 'en':
        return englishKeywords
      case 'ru':
        return russianKeywords
      default:
        return latvianKeywords;
    }
  })();

  return {
    metadataBase: new URL('https://sofiniks.store/'),
    title: {
      default: 'Energo Efektivitate',
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
      other: {
        ['facebook-domain-verification']: 'y5eifh8wzn4cj3yixxb43jpu2bdphg',
      },
    },
  };
}

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
        <GoogleAnalytics/>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StyledComponentsRegistry>
            <PageLayout>
              <Header />
              {children}
              <Footer />
            </PageLayout>
            <Suspense fallback={null}>
              <FacebookPixelEvents />
            </Suspense>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
