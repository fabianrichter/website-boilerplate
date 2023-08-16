/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            use: [require.resolve("graphql-tag/loader")],
        });
        return config;
    },
};

module.exports = nextConfig;
