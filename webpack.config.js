const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: './index.js',
    vendor: [
      'react',
      'react-dom',
      'curi',
      'curi-react',
      'redux',
      'react-redux',
      'whatwg-fetch',
      'd3-shape'
    ]
  },
  output: {
    path: path.join(__dirname, 'cryptonite', 'static'),
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'src')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      }
    ]
  },
  postcss: () => [autoprefixer],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.js',
      minChunks: Infinity
    }),
    new ExtractTextPlugin('css/index.css')
  ]
}

switch (process.env.npm_lifecycle_event) {
case 'webpack:watch':
  break;
case 'webpack:dev':
  break;
case 'webpack:prod':
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ]);
  break;
}

module.exports = config;
