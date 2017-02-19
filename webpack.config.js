const { resolve } = require('path');

module.exports = {
  entry: './app',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: './build',
    inline: true,
  },

  resolve: {
    extensions: ['*', '.js', '.json', '.jsx', '.css', '.scss'],
  },
};
