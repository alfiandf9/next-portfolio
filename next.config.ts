import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-**',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'assets.aceternity.com',
      //   pathname: '/demos/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'assets.aceternity.com',
      //   pathname: '/templates/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'assets.aceternity.com',
      //   pathname: '/pro/**',
      // },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
