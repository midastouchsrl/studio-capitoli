import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#1a5a45",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://studiocapitoli.it"),
  title: {
    default: "Studio Capitoli | Tributarista Roma - Consulenza Fiscale e Contabilità",
    template: "%s | Studio Capitoli",
  },
  description: "Studio Capitoli - Tributarista a Roma. Consulenza fiscale, contabile e societaria per PMI e liberi professionisti. Alessio Capitoli, iscritto all'Albo dei Tributaristi. Servizi anche a distanza in tutta Italia. Prima consulenza gratuita.",
  keywords: [
    "tributarista roma",
    "commercialista roma",
    "consulenza fiscale",
    "contabilità",
    "studio capitoli",
    "alessio capitoli",
    "dichiarazione dei redditi",
    "partita IVA",
    "regime forfettario",
    "consulenza tributaria",
    "PMI",
    "liberi professionisti",
    "consulenza a distanza",
  ],
  authors: [{ name: "Alessio Capitoli", url: "https://studiocapitoli.it" }],
  creator: "Studio Capitoli",
  publisher: "Studio Capitoli",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://studiocapitoli.it",
    siteName: "Studio Capitoli",
    title: "Studio Capitoli | Tributarista Roma - Consulenza Fiscale",
    description: "Tributarista a Roma. Consulenza fiscale e contabile per PMI e professionisti. Servizi anche a distanza. Prima consulenza gratuita.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Capitoli - Consulenza Fiscale e Contabilità",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Capitoli | Tributarista Roma",
    description: "Consulenza fiscale e contabile per PMI e professionisti. Prima consulenza gratuita.",
    images: ["/og-image.jpg"],
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
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://studiocapitoli.it",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
