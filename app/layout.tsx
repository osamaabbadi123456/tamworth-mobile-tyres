import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tamworthmobiletyres.co.uk"),

  title: {
    default: "Tamworth Mobile Tyres | 24/7 Emergency Tyre Fitting",
    template: "%s | Tamworth Mobile Tyres",
  },

  description:
    "24/7 emergency mobile tyre fitting in Tamworth. Fast roadside tyre replacement, puncture repair and mobile tyre assistance at your home, workplace or roadside location.",

  keywords: [
    "Tamworth mobile tyres",
    "mobile tyres Tamworth",
    "mobile tyre fitting Tamworth",
    "emergency tyre fitting Tamworth",
    "emergency mobile tyres Tamworth",
    "24 hour mobile tyre fitting Tamworth",
    "24/7 mobile tyres Tamworth",
    "mobile tyre fitter Tamworth",
    "mobile tyre service Tamworth",
    "mobile tyre replacement Tamworth",
    "urgent mobile tyre replacement Tamworth",
    "emergency tyre replacement Tamworth",
    "flat tyre repair Tamworth",
    "mobile puncture repair Tamworth",
    "puncture repair Tamworth",
    "roadside tyre replacement Tamworth",
    "roadside tyre assistance Tamworth",
    "same day mobile tyre fitting Tamworth",
    "home tyre fitting Tamworth",
    "workplace tyre fitting Tamworth",
    "van mobile tyre fitting Tamworth",
    "mobile tyre fitting near Tamworth",
    "tyre fitting near me Tamworth",
    "emergency tyre fitting at home Tamworth",
  ],

  authors: [
    {
      name: "Tamworth Mobile Tyres",
    },
  ],

  creator: "Tamworth Mobile Tyres",
  publisher: "Tamworth Mobile Tyres",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Tamworth Mobile Tyres | 24/7 Emergency Tyre Fitting",
    description:
      "Fast emergency mobile tyre fitting, flat tyre repair, puncture repair and roadside tyre replacement across Tamworth and nearby areas.",
    url: "https://tamworthmobiletyres.co.uk",
    siteName: "Tamworth Mobile Tyres",
    images: [
      {
        url: "/images/tamworth-poster.jpeg",
        width: 1200,
        height: 630,
        alt: "Tamworth Mobile Tyres 24/7 emergency mobile tyre fitting",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tamworth Mobile Tyres | Emergency Mobile Tyre Fitting",
    description:
      "24/7 mobile tyre fitting, puncture repair and roadside tyre assistance across Tamworth.",
    images: ["/images/tamworth-poster.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Mobile Tyre Fitting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
