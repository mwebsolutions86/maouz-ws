import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import "../globals.css";
import Background3D from '@/app/components/3d/Background3D';

export const metadata: Metadata = {
  title: "MazouzWS - Digital Forge",
  description: "Agence de développement web et mobile futuriste.",
  icons: {
    icon: '/logo.webp', // Chemin vers votre image dans public
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // CORRECTION: Typage Promise
}) {
  // CORRECTION: On doit await les params dans Next.js 15+
  const { locale } = await params;

  // 1. Vérification de la langue
  if (!['fr', 'en', 'ar'].includes(locale)) {
    notFound();
  }

  // 2. Chargement des messages pour la langue
  const messages = await getMessages({ locale }); 

  // 3. Détection de la direction (RTL pour l'arabe)
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      {/* On enlève bg-black et on ajoute bg-transparent */}
<body className="bg-transparent text-white antialiased overflow-x-hidden selection:bg-cyan-500 selection:text-black">
    {/* Le Background3D est chargé ici pour être partout */}
    <Background3D /> 
    <NextIntlClientProvider messages={messages} locale={locale}>
        <Navbar />
        {children}
        <Footer />
    </NextIntlClientProvider>
</body>
    </html>
  );
}