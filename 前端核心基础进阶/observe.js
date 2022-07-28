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

// const observe = (obj) => {
//   if (getType(obj) !== 'object') {
//     return
//   }
  
//   const keys = Object.keys(obj)
//   keys.forEach(key => {
//     const curVal = obj[key]
//     observe(curVal)
//     Object.defineProperty(obj, key, {
//       enumerable: true,
//       configurable: false,
//       get() {
//         console.log('get', key)
//         return curVal
//       },
//       set(val) {
//         console.log('set', key)
//         obj[key] = val
//       }
//     })
//   })
// }

let newObj = new Proxy(obj, {
  get(target, prop, receive) {
    console.log('get', prop)
    return target[prop]
  },
  set(target, prop, val) {
    console.log('proxy set', prop)
    target[prop] = val
  }
})

const observe = (obj) => {
  if (!obj || getType(obj) !== 'object') {
    return
  }
  Object.keys(obj).forEach(key => {
    let curVal = obj[key]
    if (typeof curVal === "object") {
      observe(curVal)
      newObj[key] = new Proxy(curVal, {
        get(target, prop, receive) {
          console.log('get', prop)
          return target[prop]
        },
        set(target, prop, val) {
          console.log('proxy set', prop)
          target[prop] = val
        }
      })
    }
  })
}

observe(obj)

console.log(newObj.name)

newObj.name = '向阳'

newObj.favo.title = 'vue'