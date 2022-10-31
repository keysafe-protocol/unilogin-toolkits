/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
   
      {
        source: "/ks/:path*",
        destination: "https://demo.keysafe.network:30002/ks/:path*",
      },
    ];
   },
}

module.exports = nextConfig
