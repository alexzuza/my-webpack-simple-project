const webpack = require('webpack');

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  devtool: 'cheap-inline-module-source-map',

  context: path.join(__dirname, 'src'),

  entry: [
    'webpack-dev-server/client', // --inline
    'webpack/hot/dev-server', // --hot
    './main'
  ],

  output: {
     path: __dirname + "/public",
     publicPath: '/',
     filename: '[name].js',
     hot: true
  },

  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel?stage=0',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style','css!autoprefixer?browsers=last 2 versions')
      }, {
        test: /\.(png|jpg|svg)$/,
        loader: 'file?name=[path][name].[hash:4].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // --hot
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css') // { allChunks: true }
  ],

  devServer: {
    contentBase: __dirname + "/site",
    hot: true
  }
};