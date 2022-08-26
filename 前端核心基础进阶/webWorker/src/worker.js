self.addEventListener('message', (res) => { 
  console.log(res.data)
})


const worker = new Worker('./subWorker.js')

worker.postMessage('this is a message')

// throw new Error('随便抛一个错误')