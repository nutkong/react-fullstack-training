var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
    loaders: [
    { test: /\.jsx?$/,
      exclude: /node_modules/,
      include: APP_DIR,
      loader: "babel-loader" }
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.DedupePlugin(),

  ]
};

module.exports = config;
