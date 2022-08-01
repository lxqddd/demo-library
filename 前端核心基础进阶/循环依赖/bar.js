exports.loaded = false

const foo = require('./foo')

module.exports = {
  fooWasLoaded: foo.loaded,
  loaded: true
}
