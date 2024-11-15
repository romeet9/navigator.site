import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Jacques_Francois } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const commitMono = localFont({
  src: "../public/fonts/CommitMono.woff2",
  variable: "--font-commit-mono",
  weight: "450",
  preload: true,
  display: 'swap',
});

const tiemposHeadline = localFont({
  src: "../public/fonts/TiemposHeadline-Regular.woff2",
  variable: "--font-tiempos-headline",
  weight: "400",
  preload: true,
  display: 'swap',
});

const tiemposText = localFont({
  src: [
    {
      path: "../public/fonts/TiemposText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TiemposText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/TiemposText-Regular-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-tiempos-text",
  preload: true,
  display: 'swap',
});

const jacquesFrancois = Jacques_Francois({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jacques-francois',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Robert Kan",
  description: "Robert Kan's portfolio showcasing product design work and writing about growth",
  icons: {
    icon: '/other-assets/favicon.svg',
  },
  openGraph: {
    title: 'Robert Kan',
    description: "Robert Kan's portfolio showcasing product design work and writing about growth",
    images: [{
      url: '/other-assets/thumbnail.png',
      width: 1920,
      height: 1080,
      alt: 'Robert Kan Portfolio',
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${commitMono.variable} ${tiemposHeadline.variable} ${tiemposText.variable} ${jacquesFrancois.variable} antialiased bg-background min-h-screen`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
