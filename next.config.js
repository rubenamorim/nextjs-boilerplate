/* eslint-disable eslint-comments/disable-enable-pair,@typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer');

/** @type {import('next').NextConfig} */
const config = {
    experimental: {
        appDir: true,
    },
};

module.exports = withPlugins(
    [bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })],
    config
);
