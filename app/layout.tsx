import './globals.css';
import type { Metadata } from 'next';

import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel Landing Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
