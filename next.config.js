/** @type {import('next').NextConfig} +*/
// next.config.js
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // domains: ['res.cloudinary.com'],
    formats: ['image/png']
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};
