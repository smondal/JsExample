var path = require('path');
module.exports = {
  context: path.join(__dirname, "src"),
  entry: ["./index.js",
          "webpack/hot/dev-server"
          ],
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ 'react-hmre' ]
      }
    }]
  }
};