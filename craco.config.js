const path = require('path');

const { POSTCSS_MODES } = require('@craco/craco');

module.exports = {
  jest: {
    configure: {
      moduleNameMapper: {
        '^src(.*)$': '<rootDir>/src$1',
      },
    },
  },
  style: {
    postcss: {
      mode: POSTCSS_MODES.file,
    },
  },
  webpack: {
    alias: {
      'src': path.resolve(__dirname, 'src/'),
    },
  },
};
