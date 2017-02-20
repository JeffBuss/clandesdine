const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: './app',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
      },
    },
     { test: /\.css$/, loader: 'style-loader!css-loader' },
     { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
     { test: /\.svg$/, loader: 'svg-url-loader' },
    ] },
  devServer: {
    contentBase: './build',
    inline: true,
  },

  resolve: {
    extensions: ['*', '.js', '.json', '.jsx', '.css', '.scss'],
  },
};
