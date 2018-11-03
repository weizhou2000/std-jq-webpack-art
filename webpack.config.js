const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

var fs=require('fs')
var ver=new Date().getTime()
fs.writeFileSync('./source/_data/h5.json',JSON.stringify({ver}))

module.exports = {
  entry: {
     cart: './src/cart/main.js',
     checkout: './src/checkout/main.js',
     orders: './src/orders/main.js',
     //library: 'template',
     //libraryTarget: 'umd'
   },
   //devtool: 'inline-source-map',
   devtool: 'source-map',
   devServer: {
     contentBase: './dist',
     hot: true
   },
   plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Output Management',
       template: 'src/tpl/index.html'
     }),
     new webpack.HotModuleReplacementPlugin()
   ],
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/i,
      use: ['file-loader']
    }, {
      test: /\.art$/,
      use: [{
        loader: "art-template-loader", //require.resolve('../'),
        options: {
          htmlResourceRoot: __dirname,
          root: path.resolve(__dirname)
        }
      }]
    }]
  }
};
