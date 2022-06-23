const container = document.getElementsByClassName('draw-container')[0]

function drawerRect() {
  const ctx = container.getContext('2d')

  ctx.fillStyle = 'rgba(200, 100, 100)'
  ctx.fillRect(20, 20, 200, 200)
  ctx.clearRect(70, 70, 100, 100)
  ctx.strokeRect(80, 80, 80, 80)
}

// drawerRect()

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
