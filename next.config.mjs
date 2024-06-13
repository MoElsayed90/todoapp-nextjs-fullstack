/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    timeout: 30, // increase the timeout to 30 seconds
  },
};

export default nextConfig;
