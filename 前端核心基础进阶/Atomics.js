// SharedArrayBuffer 对象用来表示一个通用的、固定长度的原始二进制数据缓冲区，类似于ArrayBuffer对象，他们都可以用来在共享内存上创建视图。与 ArrayBuffer 不同的是，SharedArrayBuffer 不能被转移。
// 创建一个大小为1的缓冲区
let shareArrayBuffer = new SharedArrayBuffer(1)

// 基于缓冲创建 Unit8Array
let typedArray = new Uint8Array(shareArrayBuffer)

// Atomics的算数方法接收三个参数，第一个是Unit8Array 的实例，第二个是索引为，第三个是算数数值
// 如下为：将索引位为0的数值加5
Atomics.add(typedArray, 0, 5)

console.log(typedArray[0]) // 5

// 将索引位为0的数值减2
Atomics.sub(typedArray, 0, 2)

console.log(typedArray[0]) // 3
