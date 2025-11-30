import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// On indique explicitement où se trouve le fichier de requête
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  /* Vos autres options de config si nécessaire */
};

// On enveloppe la config avec le plugin
export default withNextIntl(nextConfig);