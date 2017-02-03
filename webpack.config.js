var path = require("path");
var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fontPublicPath = "/HRMP/dist/";
var fontOutputPath = path.resolve(__dirname, "dist/font");


/*
 * loaders
 */

var loaders, loadersDev, loadersProduction, loadersOut;
loaders = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
            babelrc: true
        }
    },
    { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=font/[name].[hash:8].[ext]&publicPath="+fontPublicPath+"&outputPath="+fontOutputPath},
    { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader?name=font/[name].[hash:8].[ext]&publicPath="+fontPublicPath+"&outputPath="+fontOutputPath 
    }
];

loadersDev = [
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap")
    }
];

loadersProduction = [
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }
];

loadersOut = debug ? loadersDev : loadersProduction;

loaders = loaders.concat(loadersOut);


/*
 * plugins
 */
var plugins = [];
var pluginsProduction = [];

if(!debug){
    pluginsProduction = [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ];
    plugins = plugins.concat(pluginsProduction);
}

plugins.push(
    new ExtractTextPlugin("css/main.css")
);

module.exports = {
    devtool: debug ? "source-map" : "",
    entry: {
        t: "./src/scripts/t.js",
        main: "./src/scripts/main.js"
    },
    output: {
        path: "./dist",
        filename: "scripts/[name].bundle.js",
        publicPath: "/HRMP/dist"
    },
    devServer: {
        contentBase: ".",
        host: "0.0.0.0",
        port: 9999
    },
    module: {
        loaders: loaders
    },
    plugins: plugins
};
