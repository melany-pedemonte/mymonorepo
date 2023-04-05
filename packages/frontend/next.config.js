const withNx = require('@nrwl/next/plugins/with-nx');
const path = require('path');
const isSSRBuild = process.env.AMPLIFY_SSR_BUILD === 'true';

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack (config, { defaultLoaders }) {
    if (isSSRBuild) {
      // XXX: This is a workaround for a bug in Amplify SSR deployment
      config.module.rules.push({
        test: /\.([jt])sx?$/,
        include: [path.join(__dirname, '../../libs')],
        exclude: /node_modules/,
        use: [defaultLoaders.babel],
      });
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withNx(nextConfig);
