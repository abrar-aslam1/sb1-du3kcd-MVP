import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://destinationwed.com'),
  title: {
    default: 'DestinationWed - Find Your Dream Wedding Location',
    template: '%s | DestinationWed',
  },
  description: 'Discover beautiful venues and expert planners for your destination wedding.',
  keywords: ['destination wedding', 'wedding venues', 'wedding planners', 'wedding photographers'],
  authors: [{ name: 'DestinationWed' }],
  creator: 'DestinationWed',
  publisher: 'DestinationWed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'DestinationWed',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@destinationwed',
    site: '@destinationwed',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}