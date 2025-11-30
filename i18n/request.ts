import { getRequestConfig } from 'next-intl/server';
 
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
 
  // Vérification et fallback
  if (!locale || !['fr', 'en', 'ar'].includes(locale)) {
    locale = 'fr';
  }
 
  return {
    locale,
    // On remonte d'un dossier (../) pour trouver le dossier "messages"
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});