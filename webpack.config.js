/* eslint-disable no-undef */
const path = require("path");

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';
const ProdMode = !devMode;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined

module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'main.html'),
            minify: {
                collapseWhitespace: ProdMode
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.woff2?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]'
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('postcss-preset-env')]
                        }
                    }
                },
                    'sass-loader']
            }

        ]
    }
}