// entry -> output
const path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        //For JS files
        rules: [{
            loader: "babel-loader",
            test: /\.(js|jsx)$/, //Get only js files
            exclude: /node_modules/  //Don't use babel on node js
        }, {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
};