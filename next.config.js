const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer');
const optimizedImages = require('next-optimized-images');

const config = {};

module.exports = withPlugins(
    [
        optimizedImages,
        bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }),
    ],
    config
);
