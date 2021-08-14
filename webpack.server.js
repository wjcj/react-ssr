const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const config = require('./webpack.base.js');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  externals: [nodeExternals()],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'isomorphic-style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
}

module.exports = merge(config, serverConfig);