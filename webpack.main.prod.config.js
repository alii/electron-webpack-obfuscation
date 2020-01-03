const merge = require('webpack-merge');
const JavaScriptObfuscator = require('webpack-obfuscator');
const baseConfig = require('./webpack.main.config');

// Obfuscator
baseConfig.plugins.push(new JavaScriptObfuscator({
    rotateUnicodeArray: true,
    compact: true,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    sourceMap: false,
    stringArrayEncoding: true,
}));

module.exports = merge.smart(baseConfig, {
    mode: 'production'
});
