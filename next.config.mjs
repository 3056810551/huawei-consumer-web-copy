/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // 或者你的实际域名，例如 'example.com'
  },
  env: {
    logoUrl: "http://localhost:3000/logo.svg",
  },
};

export default nextConfig;
