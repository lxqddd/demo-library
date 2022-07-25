const loadByLimit = (urlIds, loadImg, limit) => {
  const urlIdsCopy = [...urlIds]

  if (urlIdsCopy.length <= limit) {
    const promiseArr = urlIds.map(urlId => loadImg(urlId))
    return Promise.all(promiseArr)
  }

  const promiseArr = urlIdsCopy.splice(0, limit).map(urlId => loadImg(urlId))

  urlIdsCopy.reduce((prevPromise, urlId) => prevPromise
    .then(() => Promise.race(promiseArr))
    .catch(error => {
      console.log(error)
    })
    .then(resolvedId => {
      let resolvedIdPosition = promiseArr.findIndex(id => resolvedId === id)
      promiseArr.splice(resolvedIdPosition, 1)
      promiseArr.push(loadImg(urlId))
    }),
  Promise.resolve())
}