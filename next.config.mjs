import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // Ignore les erreurs ESLint pendant le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignore les erreurs TypeScript pendant le build (Attention, à utiliser si vous êtes sûr que le code marche)
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default withNextIntl(nextConfig);