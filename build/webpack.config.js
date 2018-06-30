const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [];


plugins.push(new ExtractTextPlugin('aui.h5.css'));

const rootPath = path.join(__dirname, '../');

module.exports = {
    entry: path.join(rootPath, 'test/app/main.js'), //入口文件
    output: {
        path: path.join(rootPath, 'test/public/build'),
        //filename: "bundle-[hash].js"
        filename: "aui.h5.js",
        publicPath: "build/",
    },
    devtool: 'none',
    devServer: {
        host: '0.0.0.0',
        contentBase: path.join(rootPath, 'test/public'), //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.aui$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": ["es2015", "react", "stage-3"],
                            "plugins": [["transform-es2015-arrow-functions"], "transform-object-assign", "transform-async-to-generator"]
                        }
                    },
                    {
                        loader: 'aui-loader',
                        options: {
                            cssloader: 'style-loader!css-loader!postcss-loader'
                        }

                    }
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["es2015", "react", "stage-3"],
                        "plugins": [["transform-es2015-arrow-functions"], "transform-object-assign", "transform-async-to-generator"]
                    }
                }
            },
            {
                test: /\.less$/,
                // loader: 'style-loader!css-loader!less-loader'
                use: ExtractTextPlugin.extract({ use: ['css-loader', 'postcss-loader', 'less-loader'], fallback: 'style-loader' }),
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader!postcss-loader'
                use: ExtractTextPlugin.extract({ use: ['css-loader', 'postcss-loader'], fallback: 'style-loader' })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name].[ext]'
                    }
                }]
            },
            {
                // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'fonts/[name].[ext]'
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            '@auicomp': path.join(rootPath, 'src/components'),
            '@auifont': path.join(rootPath, 'src/assets/auicon'),
            '@auiutil': path.join(rootPath, 'src/utils')
        }
    },
    plugins: plugins
};