const { postcss } = require("autoprefixer")
const { assert } = require("console")
const path = require("path")
const { plugins } = require("../postcss.config")
const { default: loader } = require("vue-loader")
const { VueLoaderPlugin } = require("vue-loader/dist/index")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")

module.exports = {
    entry: "./src/mian.js",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build"),
        clean: true
    },
    resolve: {
        extensions: [".js", ".json", ".vue", ".jsx", ".ts", ".tsx"],
        alias: {
            utils: path.resolve(__dirname, "../src/utils")
        }
    },
    devServer: {
        hot: true,
        port: 8888,
        // host: "0.0.0.0",
        open: true,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" }
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 "autoprefixer"
                    //             ]
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                    { loader: "postcss-loader" }
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // maxSize: 60 * 1024
                        maxSize: 60
                    }
                },
                generator: {
                    filename: "[name]_[hash:8][ext]"
                }
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        // options: {
                        //     plugins: [
                        //         "@babel/plugin-transform-arrow-functions",
                        //         "@babel/plugin-transform-block-scoping"
                        //     ]
                        // }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin,
        new HtmlWebpackPlugin({
            title: "hello webpack",
            template: "./index.html"
        }),
        new DefinePlugin({
            BASE_URL: "'./'",
            NAME: "'chenjiawei'"
        })
    ]
}