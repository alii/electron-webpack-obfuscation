const Obfuscator = require('webpack-obfuscator');

module.exports = {
  mode: 'production',
  plugins: [new Obfuscator()],
  devtool: false,
};
