const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        'main': './src/main.js',
        'order': './src/main.js',
        'reservation': './src/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Roast',
            chunks: ['main'],
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Roast',
            chunks: ['order'],
            template: 'src/order.html',
            filename: 'order.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Roast',
            chunks: ['reservation'],
            template: 'src/reservation.html',
            filename: 'reservation.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/images", to: path.resolve(__dirname, 'dist/images') },
            ],
        }),
    ],
}