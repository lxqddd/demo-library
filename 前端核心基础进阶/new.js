function myNew(fn, ...args) {
  const obj = Object.create(fn.prototype)
  const result = fn.apply(obj, args)
  return (typeof result === 'object' && result !== null) ? result : obj
}

function Person(name, age) {
  this.name = name
  this.age = age
}

const person = myNew(Person, '向阳', 18)
console.log(person)
