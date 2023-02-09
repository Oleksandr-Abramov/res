/** @type {import('next').NextConfig} */
const url = typeof window !== "undefined" && window.location.href ? window.location.href : "";
const nextConfig = {
  reactStrictMode: true,
  basePath: url,
};

module.exports = nextConfig;
