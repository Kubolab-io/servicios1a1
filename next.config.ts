

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/servicios1a1',
  assetPrefix: '/servicios1a1',
  trailingSlash: true,
};

export default nextConfig;