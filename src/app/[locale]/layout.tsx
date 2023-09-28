import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import PageLayout from '@/components/layout/PageLayout';
import { NextIntlClientProvider } from 'next-intl';


const montserrat = Montserrat({ subsets: ['latin','cyrillic'] });
const locales = ['en', 'ru', 'lv'];

export const metadata: Metadata = {
  title: {
    default: 'Energo',
    template: '%s | Energo',
  },
  description: 'Pakalpojumi ar fosilo enerģiju',
};

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
  }catch(error) {
    notFound()
  }
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PageLayout>
          <Header />
          {children}
          <Footer />
        </PageLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
