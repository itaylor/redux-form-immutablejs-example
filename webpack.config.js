'use strict';

var webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var path      = require('path'),
    srcPath   = path.join(__dirname, './src'),
    buildPath = './build',
    appModule = 'app.js';

module.exports = {
  target: 'web',
  entry: {
    app: [ path.join(srcPath, appModule) ],
  },
  output: {
    path: path.join(__dirname, buildPath),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel?optional[]=runtime&stage=0&cacheDirectory'],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: srcPath + '/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ],
  debug: true,
  devtool: 'module-source-map'
};
