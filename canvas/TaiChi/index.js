const draw = document.getElementById('draw')
const context = draw.getContext('2d')

function drawTaiChi() {
  context.save()
  context.beginPath()
  context.strokeStyle = '#fff'
  context.arc(0, 0, 100, (Math.PI / 180) * 90, (Math.PI / 180) * -90, false)
  context.moveTo(0, 100)
  context.arc(0, 50, 50, (Math.PI / 180) * 90, (Math.PI / 180) * -90, false)
  context.moveTo(0, -100)
  context.arc(0, -50, 50, (Math.PI / 180) * -90, (Math.PI / 180) * 90, false)
  context.stroke()
  context.closePath()

  context.beginPath()
  context.fillStyle = '#fff'
  context.moveTo(0, -50)
  context.arc(0, -50, 25, 0, Math.PI * 2, false)
  context.fill()
  context.closePath()
}

function drawer() {
  context.translate(400, 400)
  drawTaiChi()
}

drawer()

console.log(context)