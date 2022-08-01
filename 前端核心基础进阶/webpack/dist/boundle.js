;(() => {
  // webpackBootstrap
  var __webpack_modules__ = {
    './src/foo.js': (module) => {
      eval(
        "function foo() {\r\n  console.log('this is foo')\r\n}\r\n\r\nmodule.exports.foo = foo\r\n\n\n//# sourceURL=webpack://webpack/./src/foo.js?"
      )
    },

    './src/index.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(
        'const { foo } = __webpack_require__(/*! ./foo */ "./src/foo.js")\r\n\r\nfunction fn() {\r\n  console.log(\'hello world\')\r\n}\r\n\r\nfn()\r\n\r\nfoo()\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?'
      )
    }
  }

  // The module cache
  var __webpack_module_cache__ = {}

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId]
    if (cachedModule !== undefined) {
      return cachedModule.exports
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {}
    })

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__)

    // Return the exports of the module
    return module.exports
  }

  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__('./src/index.js')
})()
