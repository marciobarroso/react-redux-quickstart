const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'main.js')],
    devtool: 'cheap-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules',
        ],
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            { test: /\.json$/, loader: 'json-loader' },
        ],
    },
    devServer: {
        proxy: {
            '/ws/**': {
                target: 'http://localhost:8882',
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.html`,
        }),
    ],
};
