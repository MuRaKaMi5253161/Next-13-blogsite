// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "unsplash.com",
//         port: "",
//         pathname: "/**/**",
//       },
//     ],
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.dog.ceo"], //ここにドメインを指定
  },
};
module.exports = nextConfig;
