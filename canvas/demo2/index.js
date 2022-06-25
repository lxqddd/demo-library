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

clearRect()
