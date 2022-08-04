const Path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log("Current directory:", __dirname);
module.exports = {
    entry: {
        index: Path.resolve(__dirname, './index.js'),
        ['basic-stuff']: Path.resolve(__dirname, './pages/basic-stuff.js'),
    },
    output: {
        path: Path.join(__dirname, './pages'),
        filename: '[name]-bundle.js',
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         name: false,
    //     },
    // },
    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new CopyWebpackPlugin({
    //         patterns: [{ from: Path.resolve(__dirname, '../public'), to: 'public' }],
    //     }),
    //     new HtmlWebpackPlugin({
    //         filename: 'index.html',
    //         template: Path.resolve(__dirname, '../src/index.html'),
    //     }),
    //     new HtmlWebpackPlugin({
    //         filename: 'pages/custom-buttons.html',
    //         template: Path.resolve(__dirname, '../src/pages/custom-buttons.html'),
    //     }),
    // ],
    // resolve: {
    //     alias: {
    //         '~': Path.resolve(__dirname, '../src'),
    //     },
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /\.mjs$/,
    //             include: /node_modules/,
    //             type: 'javascript/auto',
    //         },
    //         {
    //             test: /\.html$/i,
    //             loader: 'html-loader',
    //         },
    //         {
    //             test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
    //             type: 'asset'
    //         },
    //     ],
    // },
};
