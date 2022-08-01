class CustomerPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.emit.tap('CustomerPlugin', () => {
      // handle some thing
    })
  }
}

module.exports.CustomerPlugin = CustomerPlugin
