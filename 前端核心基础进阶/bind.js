Function.prototype.myBind = function (context) {
  let that = this
  const arg = Array.from(arguments).slice(1)
  return function () {
    const innerArgs = Array.from(arguments)
    const allArgs = arg.concat(innerArgs)
    return that.apply(context, allArgs)
  }
}

fn.bind(obj, 'asdf')(1234)