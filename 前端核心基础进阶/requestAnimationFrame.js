// 兼容性问题，有些浏览器不支持 requestAnimationFrame 这个api，这个时候就需要使用如下方法进行兼容

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function (callback) {
    let id = window.setTimeout(() => {
      callback()
    }, 1000 / 60)
    return id
  }
}

if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = (id) => {
    window.clearTimeout(id)
  }
}
