const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader')
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: '[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
  ]
}