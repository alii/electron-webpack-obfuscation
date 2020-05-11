// If you want to obfuscate the frontend, change this to `true`
const useObfuscation = false;

const Obfuscator = require('webpack-obfuscator');
const plugins = useObfuscation ? [new Obfuscator()] : [];

module.exports = {
  mode: 'production',
  devtool: false,
  plugins,
};
