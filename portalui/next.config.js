/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    
    if(!isServer) {
      config.resolve.fallback = {
        fs: false,
      }
    }

    config.module.rules.push({
      test: /\.my-files$/i,
      loader: "raw-loader"
    });

    return config;
  }
}
