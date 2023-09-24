import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import PageLayout from '@/components/layout/PageLayout';
import ContainerLayout from '@/components/layout/ContainerLayout';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Energo',
    template: '%s | Energo',
  },
  description: 'Pakalpojumi ar fosilo enerģiju',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <PageLayout>
          <Header />
          {children}
          <Footer />
        </PageLayout>
      </body>
    </html>
  );
}
