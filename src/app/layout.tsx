import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';

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
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
