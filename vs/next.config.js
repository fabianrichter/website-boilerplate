/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [require.resolve("graphql-tag/loader")],
    });
    config.module.rules.push({
      test: /\.(css|scss)$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "_[hash:base64:5]",
            },
          },
        },
        "sass-loader",
      ],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/start",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337"
      },
      {
        protocol: "http",
        hostname: "api.boilerplate.local"
      }
    ],
    formats: ["image/webp"]
  },
  // i18n: {
  //   locales: ['en', 'de'],
  //   defaultLocale: 'en',
  // },
  output: "standalone",
};

module.exports = nextConfig;
