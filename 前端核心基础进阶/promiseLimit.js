const loadByLimit = (urlIds, loadImg, limit) => {
  // 为了不改变原数组，在这里copy一份
  const urlIdsCopy = [...urlIds]

  // 如果当前数组长度小于限定的长度，直接通过promise.all将所有的请求一起发起
  if (urlIdsCopy.length <= limit) {
    const promiseArr = urlIds.map(urlId => loadImg(urlId))
    return Promise.all(promiseArr)
  }

  // 切割限定长度的数组，作为第一次请求的内容
  const promiseArr = urlIdsCopy.splice(0, limit).map(urlId => loadImg(urlId))

  urlIdsCopy.reduce((prevPromise, urlId) => prevPromise
    .then(() => Promise.race(promiseArr))
    .catch(error => {
      console.log(error)
    })
    .then(resolvedId => {
      // 请求成功之后，删除已完成请求并添加新的请求
      let resolvedIdPosition = promiseArr.findIndex(id => resolvedId === id)
      promiseArr.splice(resolvedIdPosition, 1)
      promiseArr.push(loadImg(urlId))
    }),
  Promise.resolve())
}