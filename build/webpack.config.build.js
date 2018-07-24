

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
const mode = process.env.MODE || 'amd';
if(mode==='amd'){
    plugins.push((function(){
        var loaderText = fs.readFileSync(path.join(__dirname, '../node_modules/aui-loader/aui.js'), 'utf8');
        var agileuiText = `define('agile-ui', function(){
            const modName = window.__AGILE_UI_ID__ || 'aui';
            return window[modName];
        });`;
        return new webpack.BannerPlugin({raw: true, exclude: /.*.css/, banner: `
        // 引入requirejs后生效，可直接作为aui文件的loader
        (function(){
            if(typeof define==="undefined"){return;}
            ${agileuiText}
            ${loaderText}
        })()`});
    })());
}

plugins.push(new webpack.BannerPlugin(`${pkg.description}
Version   : ${pkg.version}.${new Date().getTime()}
Author    : ${pkg.author}
License MIT @ ${pkg.homepage}`));



fs.removeSync(outputPath);


module.exports = config;

