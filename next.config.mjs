// import i18Config from './next-i18next.config.mjs'


const { i18n } = await import('./next-i18next.config.cjs').then((mod) => mod.default);
// import { i18n } from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n: i18Config.i18n,
  i18n
};

export default nextConfig;
