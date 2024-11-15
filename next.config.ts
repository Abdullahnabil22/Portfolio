/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/your-repo-name" : "",
};

module.exports = nextConfig;
