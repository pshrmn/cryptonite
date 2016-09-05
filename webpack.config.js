const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    bundle: './index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'cryptonite', 'static'),
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  loaders: [
    {
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel'
    }
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.js',
      minChunks: Infinity
    })
  ]
}

switch (process.env.npm_lifecycle_event) {
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
