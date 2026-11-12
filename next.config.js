/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // fully static site (no backend)
  images: { unoptimized: true }, // images are pre-optimized WebP in /public/art
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;

