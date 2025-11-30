import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // La liste de toutes nos langues supportées
  locales: ['fr', 'en', 'ar'],
 
  // La langue par défaut si aucune n'est détectée
  defaultLocale: 'fr'
});
 
export const config = {
  // On applique ce middleware à toutes les routes sauf les fichiers statiques (images, etc.)
  matcher: ['/', '/(fr|en|ar)/:path*']
};