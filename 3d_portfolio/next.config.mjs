// next.config.mjs
import withPlugins from 'next-compose-plugins';

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.glb$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: 'static/files',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default withPlugins([], nextConfig);
