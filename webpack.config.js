const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', //production
    entry: {
        main: path.resolve(__dirname, 'solution/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        //contentBase: path.resolve(__dirname, 'dist'),
        //port: 5001, //default 8080
        open: true,
        hot: true,
        //watchContentBase: true,
    },
    //loaders
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'just a Demo',
            filename: 'index.html',
            template: path.resolve(__dirname, 'solution/index.html'),
        }),
    ],
}
