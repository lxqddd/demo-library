exports.loaded = false

const bar = require('./bar')

module.exports = {
  bWasLoaded: bar.loaded,
  loaded: true
}
