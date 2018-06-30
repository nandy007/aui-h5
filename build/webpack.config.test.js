

const webpack = require('webpack');


const config = require('./webpack.config'),
    plugins = config.plugins;

plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin()
);


module.exports = config;

