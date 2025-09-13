import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "flowbite.s3.amazonaws.com", "randomuser.me", "https://resend.com/domains"]
  },
};

export default nextConfig;
