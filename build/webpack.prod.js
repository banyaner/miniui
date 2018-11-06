/**
 * Created by zhongjx on 2018/6/10.
 */
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.common.js')
const argv = require('yargs').argv
const pkg = require('../package.json')
const config = {
    mode: 'production',
    devtool: 'none', // 生成source map慢
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'mobileui.js',
        publicPath: '/dist/',
        library: 'mobileui',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: argv.cdn ? `${pkg.cdn}/${pkg.name}/` : '../', // 正确配置引用图片或字体的位置
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'), // root目录
            verbose: true,
            dry: false,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.HashedModuleIdsPlugin(),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    drop_console: true,
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            // chunkFilename: 'css/[name].[contenthash].css',
        }),
        new OptimizeCssAssetsPlugin(),
    ],
    performance: {
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        },
        hints: "warning",
    },
    stats: 'normal',
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue',
        },
    }
}
// 是否使用bundle分析
argv.analyze && config.plugins.push(new BundleAnalyzerPlugin())
module.exports = merge(common, config)
