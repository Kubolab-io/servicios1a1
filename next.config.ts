

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/servicios1a1' : '',
  assetPrefix: isProd ? '/servicios1a1' : '',
  trailingSlash: true,
};

export default nextConfig;