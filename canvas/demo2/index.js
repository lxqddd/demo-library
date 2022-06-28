const drawing = document.getElementById('draw')
const context = drawing.getContext('2d')

function drawFillRect() {
  context.fillStyle = 'red'
  // 绘制矩形
  context.fillRect(100, 100, 100, 100)

  // 绘制半透明矩形
  context.fillStyle = 'rgba(0, 0, 155, 0.5)'
  context.fillRect(150, 150, 100, 100)
}
// drawFillRect()

function drawLineRect() {
  context.strokeStyle = 'red'
  context.strokeRect(100, 100, 100, 100)

  context.strokeStyle = 'rgba(0, 0, 255, 0.5)'
  context.strokeRect(150, 150, 100, 100)
}
// drawLineRect()

function clearRect() {
  context.fillStyle = 'red'
  context.fillRect(100, 100, 100, 100)
  context.fillStyle = 'rgba(0, 0, 155, 0.5)'
  context.fillRect(150, 150, 100, 100)
  context.clearRect(160, 160, 30, 30)
}

// clearRect()

function drawArc() {
  context.beginPath()
  context.arc(200, 200, 100, 0, Math.PI * 2, true)

  context.strokeStyle = '#fff'

  context.stroke()
}

// drawArc()

function drawClock() {
  context.beginPath()
  context.arc(200, 200, 120, 0, Math.PI * 2)
  context.moveTo(310, 200)
  context.arc(200, 200, 110, 0, Math.PI * 2)

  // 移动坐标原点到圆心
  context.translate(200, 200)

  // 旋转图形
  // context.rotate((Math.PI / 180) * 90)

  context.moveTo(0, 0)
  context.lineTo(0, -80)
  context.moveTo(0, 0)
  context.lineTo(60, 0)

  function drawNumber() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    context.strokeStyle = '#fff'
    context.font = '12px Arial'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillStyle = '#fff'
    for (var i = 0; i < arr.length; i++) {
      context.fillText(
        arr[i],
        108 * Math.cos(((i * 30 - 60) * Math.PI) / 180),
        108 * Math.sin(((i * 30 - 60) * Math.PI) / 180)
      )
    }
  }

  drawNumber()

  context.stroke()
}

drawClock()

function useSave() {
  context.beginPath()

  context.fillStyle = '#f00'
  context.save()

  context.fillStyle = '#0f0'
  context.translate(100, 100)
  context.save()
  context.fillStyle = '#00f'
  context.fillRect(0, 0, 100, 100)

  context.restore()
  context.fillRect(10, 10, 100, 100)
  context.restore()
  context.fillRect(0, 0, 100, 100)
}

// useSave()

function useDrawImage() {
  const img = new Image()
  img.src = '../../images/requestAnimationFrame.png'
  img.onload = function () {
    context.drawImage(img, 10, 10)
  }
}
// useDrawImage()
