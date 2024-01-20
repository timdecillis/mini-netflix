/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["styles"]
  },
  images: {
    domains: ['m.media-amazon.com'],
  }
};

export default nextConfig;