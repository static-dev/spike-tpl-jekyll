const {UglifyJsPlugin} = require('webpack').optimize

module.exports = {
  // disable source maps
  devtool: false,
  // webpack optimization and minfication plugins
  plugins: [new UglifyJsPlugin()]
}
