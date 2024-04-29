const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "expo",
    "@clerk/nextjs",
    "@expo/next-adapter",
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

module.exports = nextConfig;
