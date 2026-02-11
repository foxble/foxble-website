import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

export const metadata: Metadata = {
  title: {
    default: 'Foxble | Global Wireless IoT Solutions',
    template: '%s | Foxble',
  },
  description: 'Foxble provides global wireless IoT solutions for tracking and monitoring devices worldwide. Connect, monitor, and manage your IoT devices with our cutting-edge technology.',
  keywords: ['IoT', 'wireless', 'tracking', 'monitoring', 'global', 'devices', 'sensors', 'connectivity'],
  authors: [{ name: 'Foxble' }],
  creator: 'Foxble',
  publisher: 'Foxble',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://foxble.com',
    siteName: 'Foxble',
    title: 'Foxble | Global Wireless IoT Solutions',
    description: 'Global wireless IoT solutions for tracking and monitoring devices worldwide.',
    images: [
      {
        url: 'https://foxble.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Foxble - Global Wireless IoT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foxble | Global Wireless IoT Solutions',
    description: 'Global wireless IoT solutions for tracking and monitoring devices worldwide.',
    images: ['https://foxble.com/twitter-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Foxble',
    url: 'https://foxble.com',
    logo: 'https://foxble.com/logo.png',
    description: 'Global wireless IoT solutions for tracking and monitoring devices worldwide.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@foxble.com',
    },
    sameAs: [
      // Add social media links when available
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} antialiased bg-[#37387a]`}
      >
        <Analytics />
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
