import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";

// CONFIGURATION SEO GLOBALE
export const metadata: Metadata = {
  metadataBase: new URL('https://maouz-ws.vercel.app'),
  title: {
    default: "MazouzWS - Agence Digitale d'Élite",
    template: "%s | MazouzWS"
  },
  description: "Nous forgeons des écosystèmes numériques. Développement Web, Mobile, 3D et Architecture Cloud. Basé à Agadir, Maroc.",
  keywords: ["Agence Web Agadir", "Développement React Native", "Site 3D Three.js", "Création Application Mobile Maroc", "Mazouz Web Solutions"],
  authors: [{ name: "Alex Mazouz" }],
  creator: "Mazouz Web Solutions",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://maouz-ws.vercel.app",
    siteName: "MazouzWS",
    title: "MazouzWS - Forging Reality",
    description: "Agence digitale d'élite. Web immersif, Mobile performant, IA embarquée.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "MazouzWS Digital Forge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MazouzWS - Digital Forge",
    description: "Agence digitale d'élite. Web immersif, Mobile performant, IA embarquée.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

// DONNÉES STRUCTURÉES (SCHEMA.ORG)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "STE MAZOUZ WEB SOLUTIONS",
  "image": "https://maouz-ws.vercel.app/opengraph-image.png",
  "description": "Agence de développement web et mobile futuriste basée à Agadir.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "DR TAGADIRT NAABADOU",
    "addressLocality": "DRARGA, AGADIR",
    "addressRegion": "Souss-Massa",
    "postalCode": "80000",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.4278,
    "longitude": -9.5981
  },
  "url": "https://maouz-ws.vercel.app",
  "telephone": "+212000000000",
  "email": "contact@mazouzws.com",
  "priceRange": "$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}