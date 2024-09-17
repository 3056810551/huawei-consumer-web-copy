/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
    ],
  },
  env: {
    logoUrl: "http://localhost:3000/logo.svg",
  },
};

export default nextConfig;
