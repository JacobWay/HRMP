var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: {
        t: "./src/scripts/t.js",
        main: "./src/scripts/main.js"
    },
    output: {
        path: "./dist",
        filename: "scripts/[name].bundle.js",
        publicPath: "/dist"
    },
    devServer: {
        contentBase: ".",
        host: "0.0.0.0",
        port: 9999
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap", "sass-loader?sourceMap")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/main.css")
    ]
};
