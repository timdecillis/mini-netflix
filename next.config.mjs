/** @type {import('next').NextConfig} */
import TerserPlugin from 'terser-webpack-plugin';

const nextConfig = {
  sassOptions: {
    includePaths: ["styles"]
  },
  images: {
    domains: ['m.media-amazon.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ];
    }
    return config;
  }
};

export default nextConfig;