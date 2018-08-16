

const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs-extra'),
    glob = require('glob');


const pkg = require('../package.json');

const config = require('./webpack.config'),
    plugins = config.plugins;


const outputPath = path.join(__dirname, '../dist/' + pkg.version);
config.output.path = outputPath;
config.output.publicPath = '';
const mode = process.env.MODE || 'amd';
const entry = [path.join(__dirname, '../src/index.'+mode)], compPath = path.join(__dirname, '../src/components');
glob.sync('**/*.aui', {cwd: compPath}).forEach((file) => {
    entry.push(path.join(compPath, file));
});
config.entry = entry;

plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: 'production'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    })
);


plugins.push(new webpack.BannerPlugin(`${pkg.description}
Version   : ${pkg.version}.${new Date().getTime()}
Author    : ${pkg.author}
License MIT @ ${pkg.homepage}`));



fs.removeSync(outputPath);


module.exports = config;

