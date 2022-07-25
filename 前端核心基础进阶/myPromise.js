class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = null
    this.reason = null
    this.onFulfilledArr = []
    this.onRejectedArr = []
    try {
      executor(this.resolve, this.reject)  
    } catch (error) {
      this.reject(this.reason)
    }
    
  }

  resolve = (value) => {
    if (value instanceof MyPromise) {
      return value.then(this.resolve, this.reject)
    }
    setTimeout(() => {
      if (this.state === 'pending') {
        this.value = value
        this.state = 'fulfilled'
        this.onFulfilledArr.forEach(fulfilledFn => fulfilledFn(this.value))
      }
    })
  }
  reject = (reason) => {
    setTimeout(() => {
      if (this.state === 'pending') {
        this.reason = reason
        this.state = 'rejected'
        this.onRejectedArr.forEach(rejectedFn => rejectedFn(this.reason))
      }
    })
  }
  then(onFulfilled = Function.prototype, onRejected = Function.prototype) {
    if (this.state === 'resolved') {
      console.log('resolve')
      return new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(onFulfilled(this.value))
          } catch (error) {
            reject(error)
          }
        })
      })
    }
    if (this.state === 'rejected') {
      console.log('reject')
      return new MyPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(onRejected(this.reason))
          } catch (error) {
            reject(error)
          }
        })
      })
    }
    if (this.state === 'pending') {
      return new MyPromise((resolve, reject) => {
        this.onFulfilledArr.push(() => {
          try {
            resolve(onFulfilled(this.value))
          } catch (error) {
            reject(error)
          }
        })

        this.onRejectedArr.push(() => {
          try {
            resolve(onRejected(this.value))
          } catch (error) {
            reject(error)
          }
        })
      })
    }
  }
}


let promise = new MyPromise((resolve, reject) => {
    resolve('data')
})

const p = promise.then(data => {
  console.log(data)
})
  .then(data => {
  console.log('2', data)
})

console.log(p)
console.log(1)