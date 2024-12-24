/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  swcMinify: true,
  experimental: {
    optimizeCss: true
  }
};

module.exports = nextConfig;