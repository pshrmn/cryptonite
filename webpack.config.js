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
      'react-apollo',
      'd3-shape'
    ]
  },
  output: {
    path: path.join(__dirname, 'cryptonite', 'static'),
    filename: 'js/bundle.js',
    chunkFilename: 'js/[name].bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.js',
      minChunks: Infinity
    }),
    new ExtractTextPlugin('css/index.css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    })
  ]
}

module.exports = config;
