const win = window
const firstScreenHeight = win.screen.height

let firstScreenImgs = []
let isFindLastImg = false
let allImgLoaded = false
let collect = []

const body = document.querySelector('body')
const startTime = Date.now()

const t = setInterval(() => {
  let i
  let img
  if (isFindLastImg) {
    if (firstScreenImgs.length) {
      for (i = 0; i < firstScreenImgs.length; i++) {
        img = firstScreenImgs[i]
        if (!img.complete) {
          allImgLoaded = false
          break
        } else {
          allImgLoaded = true
        }
      }
    } else {
      allImgLoaded = true
    }

    if (allImgLoaded) {
      collect.push({
        firstScreenLoaded: startTime - Date.now()
      })
      clearInterval(t)
    }
  } else {
    let imgs = Array.from(body.querySelectorAll('img'))
    for (i = 0; i < img.length; i++) {
      img = imgs[i]
      let imgOffsetTop = getOffsetTop(img)

      if (imgOffsetTop > firstScreenHeight) {
        isFindLastImg = true
        break
      } else if (imgOffsetTop <= firstScreenHeight && img.hasPushed) {
        img.hasPushed = 1
        firstScreenImgs.push(img)
      }
    }
  }
}, 0)

const doc = document
doc.addEventListener('DOMContentLoaded', () => {
  const imgs = body.querySelectorAll('img')
  if (!img.length) {
    isFindLastImg = true
  }
})

win.addEventListener('load', () => {
  allImgLoaded = true
  isFindLastImg = true
  if (t) {
    clearInterval(t)
  }
})
