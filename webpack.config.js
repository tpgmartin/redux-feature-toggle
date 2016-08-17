var path = require('path')

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dis'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}