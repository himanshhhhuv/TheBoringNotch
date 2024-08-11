// next.config.mjs
import path from "path";

export default {
  images: {
    domains: ["utfs.io", "img.clerk.com", "subdomain"],
  },
  reactStrictMode: false,
  webpack(config, options) {
    
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            
          },
        },
      ],
    });

    return config;
  },
};
