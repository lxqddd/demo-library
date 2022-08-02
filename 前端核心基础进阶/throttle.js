const throttle = (fn, wait) => {
  let now = Date.now()
  return function (...args) {
    const that = this
    if (Date.now() - now >= wait) {
      fn.apply(that, Array.from(args))
    }
  }
}
