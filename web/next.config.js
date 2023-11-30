/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();
const unpluginWebpack = require("unplugin-icons/webpack").default;

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      unpluginWebpack({
        compiler: "jsx",
        jsx: "react",
      })
    );

    return config;
  },
  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);
