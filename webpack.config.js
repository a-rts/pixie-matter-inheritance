// TODO: Split into webpack.common.js and webpack.prod.js when ready for production
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            }
          }
        }
      ]
    },
    stats: {
        colors: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Pixie Matter'
      })
    ],
    devtool: 'eval',
    devServer: {
      port: process.env.PORT || 8080,
      contentBase: path.join(__dirname, 'dist'),
      watchOptions: {
        poll: true
      }
    }
};
