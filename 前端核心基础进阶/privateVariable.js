const obj = (function () {
  const state = 'state'

  function bar() {
    console.log('this is bar', state)
  }
  function foo() {
    console.log('this is foo')
  }
  return {
    bar,
    foo
  }
})()


console.log(obj.bar())