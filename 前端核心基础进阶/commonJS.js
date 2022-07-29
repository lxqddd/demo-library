const module = {}

module.exports = {}

(function (module, exports) {
  const bar = 'bar'
  exports.bar = bar
})(module, module.exports)

console.log(module.exports)