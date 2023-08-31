/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  compiler: {
    styledComponents: {
      displayName: false,
    },
  },
};

module.exports = nextConfig;
