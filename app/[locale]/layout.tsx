import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/Footer";
import "../globals.css"; // <--- CORRECTION ICI (2 points seulement)

export const metadata: Metadata = {
  title: "MazouzWS - Digital Forge",
  description: "Agence de développement web et mobile futuriste.",
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
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Vérification : si la langue n'est pas supportée, on renvoie une 404
  if (!['fr', 'en', 'ar'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}