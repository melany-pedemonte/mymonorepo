// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // Add the following options to set the basePath and assetPrefix
  basePath: '/packages/frontend',
  assetPrefix: 'https://main.d1nedej6uewca3.amplifyapp.com',
};

module.exports = withNx(nextConfig);
