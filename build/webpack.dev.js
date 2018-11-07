/**
 * Created by zhongjx on 2018/6/10.
 */
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJS = require('uglify-js') // 处理内联函数的压缩
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const argv = require('yargs').argv
const fs = require('fs')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: 'js/[name].[hash].js',
        publicPath: '/',
    },
    devServer: {
        overlay: {
            warnings: false,
            errors: true
        },
        open: true,
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        hot: true,
        clientLogLevel: 'error',
        disableHostCheck:true,
        host: '0.0.0.0', // 设置通过本机ip访问热加载页面
        // useLocalIp: true,
        // quiet: true,
        historyApiFallback: false, // 需设置成false，否则mock接口未异步，无法被读取到
        before(app) {
            if (argv.mock) {
                // mock api requests
                var mockDir = path.resolve(__dirname, '../mock')
                var walk = function (dir, done) {
                    var results = []
                    fs.readdir(dir, function (err, list) {
                        if (err) return done(err)
                        var i = 0
                        !(function next() {
                            var file = list[i++]
                            if (!file) return done(null, results)
                            file = dir + '/' + file
                            fs.stat(file, function (err, stat) {
                                if (stat && stat.isDirectory()) {
                                    walk(file, function (err, res) {
                                        results = results.concat(res)
                                        next()
                                    })
                                } else {
                                    results.push(file)
                                    next()
                                }
                            })
                        })()
                    })
                }
                // 遍历mock下所有文件(包括子文件夹中的文件)
                walk(mockDir, function (err, results) {
                    if (err) throw err
                    results.map(function (mock) {
                        if (/.js/.test(mock)) {
                            var mockData = require(mock)
                            app.use(mockData.api, mockData.response)
                        }
                    })
                })
            }
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'examples/index.html',
            minify: {
                minifyJS: function (code) {
                    return (UglifyJS.minify(code)).code
                },
                collapseWhitespace: true,
            },
            inlineSource: 'manifest',
        }),
        new CopyWebpackPlugin([{
            from: 'static',
            to: 'static',
        }]),
        new MiniCssExtractPlugin({
            filename: 'css/styles.[hash].css',
            chunkFilename: "css/[id].css"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    stats: 'minimal',
})
