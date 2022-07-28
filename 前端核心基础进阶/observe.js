const obj = {
  name: 'xy',
  age: 18,
  favo: {
    title: 'web'
  }
}

function getType(params) {
  return Object.prototype.toString.call(params).slice(8, -1).toLowerCase()
}

const observe = (obj) => {
  if (getType(obj) !== 'object') {
    return
  }
  
  const keys = Object.keys(obj)
  keys.forEach(key => {
    const curVal = obj[key]
    observe(curVal)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: false,
      get() {
        console.log('get', key)
        return curVal
      },
      set(val) {
        console.log('set', key)
        obj[key] = val
      }
    })
  })
}

const newObj = new Proxy(obj, {
  enumerable: true,
  configurable: false,
  get(target, prop, receive) {
    console.log('get', prop)
    return target[prop]
  },
  set(target, prop, val) {
    console.log('set', prop)
    target[prop] = val
  }
})

console.log(newObj.name)

newObj.name = '向阳'

newObj.favo.title = 'vue'