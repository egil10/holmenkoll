/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Tree-shake large icon/chart libraries so only the icons actually used
    // land in each route's bundle instead of the whole package barrel.
    optimizePackageImports: ["lucide-react", "recharts"],
  },
};

export default nextConfig;
