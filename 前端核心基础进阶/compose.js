// function compose(...args) {
//   let length = args.length
//   let count = length - 1
//   let res
  
//   return function fn(...args1) {
//     res = args[count].apply(this, args1)
//     if (count <= 0) {
//       count = length - 1
//       return res
//     }
//     count--
//     return fn.call(null, res)
//   }
// }


function compose(...funcs) {
  if (funcs.length === 0) {
    throw new Error('没有参数')
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}