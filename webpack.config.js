const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const filename = (ext) => (isDev ? `main.${ext}` : `main.[contenthash].${ext}`);
const assetFilename = () => (isDev ? "[name][ext]" : "[name].[hash][ext]");

module.exports = {
    mode: isDev ? "development" : "production",
    devtool: isDev ? "source-map" : undefined,
    entry: "./src/index.tsx",
    output: {
        filename: `static/js/${filename("js")}`,
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html",
            publicPath: "/",
        }),
        new MiniCssExtractPlugin({
            filename: `static/css/${filename("css")}`,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts)|(tsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName:
                                    "[name]__[local]__[hash:base64:5]",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: { plugins: ["postcss-preset-env"] },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: isProd ? "asset" : "asset/resource",
                generator: {
                    filename: `static/media/img/${assetFilename()}`,
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: `static/media/fonts/${assetFilename()}`,
                },
            },
        ],
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                            ["svgo", { name: "preset-default" }],
                        ],
                    },
                },
            }),
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        client: {
            logging: "error",
        },
    },
};