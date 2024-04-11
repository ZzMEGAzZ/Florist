/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [''],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
