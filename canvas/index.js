const container = document.getElementsByClassName('draw-container')[0]

function drawer() {
  const ctx = container.getContext('2d')

  ctx.fillStyle = 'rgba(200, 100, 100)'
  ctx.fillRect(20, 20, 200, 200)
  ctx.clearRect(70, 70, 100, 100)
  ctx.strokeRect(80, 80, 80, 80)
}

drawer()
