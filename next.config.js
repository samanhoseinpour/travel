const withPWA = require('next-pwa')({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

/** @type {import('next').NextConfig} */

module.exports = withPWA({
  nextConfig,
});
