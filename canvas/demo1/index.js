const container = document.getElementsByClassName('draw-container')[0]

// 矩形
function drawerRect() {
  const ctx = container.getContext('2d')

  ctx.fillStyle = 'rgba(200, 100, 100)'
  ctx.fillRect(20, 20, 200, 200)
  ctx.clearRect(70, 70, 100, 100)
  ctx.strokeRect(80, 80, 80, 80)
}

// drawerRect()

// 三角形
function drawTriangle() {
  const context = container.getContext('2d')
  context.beginPath()
  // 起点
  context.moveTo(50, 50)
  // 移动画笔，画出线条
  context.lineTo(50, 100)
  context.lineTo(100, 50)
  context.lineTo(50, 50)
  // 填充图形
  context.fill()
}

// drawTriangle()

// 笑脸
function drawFace() {
  const context = container.getContext('2d')
  console.log(context)

  context.beginPath()

  context.arc(250, 250, 200, 100, Math.PI * 2, true)
  context.moveTo(200, 170)
  context.arc(200, 200, 30, 30, Math.PI * 2, true)
  context.moveTo(330, 200)
  context.arc(300, 200, 30, 0, Math.PI * 2, true)
  context.moveTo(100, 250)
  context.arc(250, 250, 0, 180, Math.PI, true)

  context.stroke()
}

drawFace()
