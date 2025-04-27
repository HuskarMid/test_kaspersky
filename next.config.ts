import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/test_kaspersky',
  assetPrefix: '/test_kaspersky/',
};

export default nextConfig;
