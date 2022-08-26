const worker = new Worker('./src/worker.js')

worker.postMessage({
  bar: 'hello'
})
worker.onerror = (err) => {
  console.log(err)
}

worker.addEventListener('message', (res) => {
  console.log('message form worker', res)
})
export {
  worker
}