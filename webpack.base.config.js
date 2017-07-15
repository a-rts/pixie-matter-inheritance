const path = require("path"),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const TITLE = 'Pixie Matter',
    // DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
    // context: CLIENT_DIR,

    entry: "./src/main.js",

    output: {
        path: path.join(__dirname, "dist"),
        publicPath: '/',
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: TITLE
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: false
        })
    ],

    devtool: 'eval',

    stats: {
        colors: false
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
              presets: ['env']
          }
        //   use: {
        //     loader: 'babel-loader'
        //   }
        }
      ]
    }

};
