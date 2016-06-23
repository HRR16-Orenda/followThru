var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var entry = process.env.NODE_ENV === 'production' ? ['babel-polyfill', './client-web/index.js'] : [
  'webpack-dev-server/client?http://localhost:8080/',
  'webpack/hot/dev-server',
  'babel-polyfill',
  './client-web/index.js'
]

module.exports = {
  // uses our init.js for entry point
  entry: entry,

  output: {
    // outputs pack to bundle js.
    path: path.join(__dirname, 'build'),
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map',
    publicPath: '/'
  },

  devtool: '#source-map',

  module: {
    loaders: [
      {
        // runs all jsx through babel
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader?cacheDirectory']
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin
    ([
      {
        from: __dirname + '/client-web/index.html',
        to: __dirname + '/build/index.html'
      }
    ])
  ]
}
