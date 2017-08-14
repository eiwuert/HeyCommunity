var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: "./index.js",
  module: {
    loaders: [{
      // APP
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      // AdminLTE JS
      test: /\.js$/,
      include: path.resolve(__dirname, 'node_modules/adminlte-reactjs/src'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
   }]
  },
  output: {
    path: path.resolve(__dirname, '../../../public/assets/javascript'),
    filename: "admin-bundle.js"
  }
};
