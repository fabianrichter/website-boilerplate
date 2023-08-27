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
};

module.exports = nextConfig;
