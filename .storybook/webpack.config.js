const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@theme': [path.resolve(__dirname, '../src/theme')],
  }

  return {
    ...config,
  };
};
