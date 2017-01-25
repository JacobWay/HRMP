module.exports = {
    entry: {
        t: "./src/scripts/t.js"
    },
    output: {
        path: "./dist",
        filename: "scripts/[name].bundle.js",
        publicPath: "/dist"
    },
    devSever: {
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
            }
        ]
    }
};
