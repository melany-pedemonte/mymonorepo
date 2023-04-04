const { withNx } = require('@nrwl/next/plugins/with-nx');
const path = require('path');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // Set the output directory of the build
  distDir: 'dist/packages/frontend',
  // Set the directory of the build output relative to the project root
  // This is necessary to generate the index.html file in the right directory
  // for Amplify deployment
  basePath: '/packages/frontend',
  // Set the path to the public directory of the app
  // This is necessary to copy the public assets to the build directory
  // for Amplify deployment
  // You can adjust the path to your public directory as needed
  publicRuntimeConfig: {
    staticFolder: '/packages/frontend/public',
  },
  // Generate the index.html file
  generateBuildId: async () => {
    return 'my-build-id';
  },
  webpack: (config, options) => {
    // Adjust the webpack configuration as needed
    return config;
  },
};

module.exports = withNx(nextConfig);
