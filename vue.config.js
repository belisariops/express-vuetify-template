const configureAPI = require('./backend/configure')

module.exports = {
  devServer: {
    before: configureAPI
  }
}