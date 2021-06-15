const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer');

const config = {
    reactStrictMode: true,
};

module.exports = withPlugins(
    [bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })],
    config
);
