const debounce = (fn, wait) => {
  return function (...args) {
    let that = this
    let timer = null
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn.apply(that, Array.from(args))
    }, wait)
  }
}

function bar() {
  console.log(bar)
}

const newFn = debounce(bar)

newFn('asdf')
