

const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs-extra'),
    glob = require('glob');


const pkg = require('../package.json');

const config = require('./webpack.config'),
    plugins = config.plugins;


const outputPath = path.join(__dirname, '../dist/' + pkg.version);
config.output.path = outputPath;

const entry = [], compPath = path.join(__dirname, '../src/components');
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



fs.removeSync(outputPath);


module.exports = config;

