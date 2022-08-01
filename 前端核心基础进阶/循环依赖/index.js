const bar = require('./bar')
const foo = require('./foo')

console.log(bar, 'bar')
console.log(foo, 'foo')

// 输出结果
// { fooWasLoaded: true, loaded: true }
// { bWasLoaded: false, loaded: true }

/**
 * 由于缓存机制的存在
 * 第一次加载bar时，会执行 const foo = require('./foo')
 * 所以可以直接进入模块 foo 中，而此时模块 foo 中又会执行 const bar = require('./bar')
 * 由于模块 bar 已经被缓存，
 * 所以 foo 模块返回 { bWasLoaded: false, loaded: true }
 * 这时候在返回到模块 bar 中继续执行，bar 返回 { fooWasLoaded: true, loaded: true }
 */
