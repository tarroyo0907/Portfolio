/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Ensures all routes end with a trailing slash
};

export default nextConfig;
