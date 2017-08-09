var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: "./index.js",
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  output: {
    path: __dirname,
    filename: "../../../public/assets/javascript/admin-bundle.js"
  }
};
