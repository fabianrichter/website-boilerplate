/** @type {import('next').NextConfig} */

// Import class name generator factory
const { getLocalIdentName } = require("css-loader-shorter-classnames");

// Create generator
const getLocalIdent = getLocalIdentName();

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
              getLocalIdent,
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
};

module.exports = nextConfig;
