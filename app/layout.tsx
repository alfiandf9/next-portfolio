import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alfiandf-portfolio.vercel.app"),
  title: {
    default: "Muhammad Alfian | Frontend Developer",
    template: "%s | Muhammad Alfian",
  },
  description:
    "Frontend Developer specializing in React, Next.js, and TypeScript. Building fast, accessible, and maintainable web applications with 5+ years of experience.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Development",
    "Muhammad Alfian",
    "JavaScript",
    "Tailwind CSS",
    "Frontend Engineer",
    "UI Developer",
  ],
  authors: [{ name: "Muhammad Alfian Dwi Fantara" }],
  creator: "Muhammad Alfian Dwi Fantara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alfiandf-portfolio.vercel.app",
    title: "Muhammad Alfian | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript. Building fast, accessible, and maintainable web applications.",
    siteName: "Muhammad Alfian Portfolio",
    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Alfian - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Alfian | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript",
    images: ["/images/portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when you set up:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
