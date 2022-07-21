function getType(target) {
  const ret = Object.prototype.toString.call(target)
  return ret.slice(1 ,ret.length - 1).split(' ')[1]
}

const a = 1
a.valueOf = function () {
  return 3
}

console.log(a)