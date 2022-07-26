const obj = {
  foo: true,
  bar: false
}

function includes(object, predicate) {
  const ret = {}
  if (Array.isArray(predicate)) {
    for (const key of predicate) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key)
      Object.defineProperty(ret, key, descriptor)
    }
  } else {
    const keys = Object.keys(object)
    for (const key of keys) {
      if (predicate(key, object[key])) {
        const descriptor = Object.getOwnPropertyDescriptor(object, key)
        Object.defineProperty(ret, key, descriptor)
      }
    }
  }
  return ret
}

function excludes(object, predicate) {
  if (Array.isArray(predicate)) {
    const set = new Set(predicate)
    return includes(object, key => !set.has(key))
  }
  return includes(object, (key, val, object) => !predicate(key, val, object))
}

// console.log(includes(obj, ['foo']))

// console.log(includes(obj, (key, value) => value === true ))

// console.log(excludes(obj, ['foo']))
console.log(excludes(obj, (key, val) => val === true))
