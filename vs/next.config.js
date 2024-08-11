/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [require.resolve("graphql-tag/loader")],
    });
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "static/css/[name].[contenthash].css",
      })
    );
    config.module.rules.push({
      test: /\.(css|scss)$/i,
      use: [
        // 'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "_[hash:base64:5]",
            },
          },
        },
        "postcss-loader",
        "sass-loader",
      ],
    });
    config.optimization.minimizer.push(new CssMinimizerPlugin());
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
  images: {
    deviceSizes: [640, 1024, 1600],
    imageSizes: [32, 64, 96],
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_STRAPI_HOST || "127.0.0.1",
        port: process.env.NEXT_PUBLIC_STRAPI_PORT || "1337",
      },
    ],
    path: "/_next/image",
    loader: "default",
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "de",
  },
  output: "standalone",
};

module.exports = nextConfig;
