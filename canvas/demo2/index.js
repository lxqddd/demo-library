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

  context.moveTo(200, 200)
  context.lineTo(200, 120)

  context.moveTo(200, 200)
  context.lineTo(260, 200)

  context.strokeStyle = '#fff'

  context.font = '12px Arial'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillStyle = '#fff'

  context.fillText('0', 200, 110)
  context.fillText('3', 290, 200)
  context.fillText('6', 200, 290)
  context.fillText('9', 110, 200)

  context.stroke()
}

drawClock()
