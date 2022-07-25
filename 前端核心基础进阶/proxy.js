class Person {
  constructor(name) {
    this.name = name
  }
}

let proxyPersonClass = new Proxy(Person, {
  apply(target, context, args) {
    return new (target.bind(context, ...args))()
  }
})

console.log(proxyPersonClass('xy'))


const asset = new Proxy({}, {
  set(target, warning, value) {
    if (!value) {
      console.log(warning)
    } else {
      console.log('pass')
    }
  }
})

const weather = 'cold'

asset['the weather is not good'] = weather === 'cold'