var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fontPublicPath = "/dist/";
var fontOutputPath = path.resolve(__dirname, "dist/font");

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
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap", "sass-loader?sourceMap")
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=font/[name].[hash:8].[ext]&publicPath="+fontPublicPath+"&outputPath="+fontOutputPath},
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader?name=font/[name].[hash:8].[ext]&publicPath="+fontPublicPath+"&outputPath="+fontOutputPath 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/main.css")
    ]
};
