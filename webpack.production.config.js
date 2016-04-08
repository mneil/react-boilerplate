var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

const sassLoaders = [
  'css-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './app')
]

var APP_DIR = path.resolve(__dirname, 'app')
var BUILD_DIR = path.resolve(__dirname, 'build')

var config = {
  devtool: 'source-map',
  entry: path.resolve(APP_DIR, 'index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: '/js/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /.*\.(png|gif|jpe?g|svg)$/i,
        loaders: [
          'file?name=/images/[sha512:hash:base64:7].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('/css/bundle.css'),
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': 'production'}
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ]
}

module.exports = config