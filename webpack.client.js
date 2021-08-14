const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const config = require('./webpack.base.js');

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'client.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, './index.html'),
      filename: 'index.html',
      minify:{
        removeComments: false,
      }
    })
  ]
}

module.exports = merge(config, clientConfig);
