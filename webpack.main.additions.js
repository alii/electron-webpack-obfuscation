const Obfuscator = require('webpack-obfuscator');

module.exports = (config) => {
  return {
    ...config,
    plugins: [...config.plugins, config.mode === 'production' && new Obfuscator()].filter(Boolean),
    devtool: false,
  };
};
