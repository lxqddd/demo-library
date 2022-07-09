// 角度转弧度公式：(Math.PI / 180) * 角度

const draw = document.getElementById('draw')
const context = draw.getContext('2d')

function drawStrokeCircle(context, radius) {
  context.save()
  context.beginPath()
  context.strokeStyle = '#fff'
  context.shadowBlur = 9
  context.shadowColor = '#fff'
  context.arc(0, 0, radius, 0, Math.PI * 2)
  context.closePath()
  context.stroke()
  context.restore()
}

function drawFillCircle(params = { context, radius, color }) {
  const { context, radius, color, x, y } = params
  context.save()
  context.beginPath()
  context.fillStyle = color
  context.arc(x, y, radius, 0, Math.PI * 2)
  context.fill()
  context.closePath()
  context.restore()
}

function clearArcFun(x,y,r,cxt){
  //(x,y)为要清除的圆的圆心，r为半径，cxt为context
  var stepClear=1;//别忘记这一步  
  clearArc(x,y,r);
  function clearArc(x,y,radius){
      var calcWidth=radius-stepClear;  
      var calcHeight=Math.sqrt(radius*radius-calcWidth*calcWidth);  
      var posX=x-calcWidth;
      var posY=y-calcHeight;
      var widthX=2*calcWidth;  
      var heightY=2*calcHeight;
      if(stepClear<=radius){  
          cxt.clearRect(posX,posY,widthX,heightY);  
          stepClear+=1;  
          clearArc(x,y,radius);  
      }
  }
}

function drawTaiChi(rotate) {
  drawStrokeCircle(context, 100)
  context.save()
  context.beginPath()
  clearArcFun(0, 0, 100, context)
  context.rotate(Math.PI / 180 * rotate)
  context.fillStyle = '#fff'
  context.arc(0, 0, 100, (Math.PI / 180) * 90, (Math.PI / 180) * -90, true)
  context.moveTo(0, 100)
  context.arc(0, 50, 50, (Math.PI / 180) * 90, (Math.PI / 180) * -90, false)
  context.moveTo(0, -100)
  context.arc(0, -50, 50, (Math.PI / 180) * -90, (Math.PI / 180) * 90, false)
  context.fill()
  context.closePath()
  
  context.moveTo(0, -75)
  drawFillCircle({ context, radius: 20, color: '#fff', x: 0, y: -50 })
  context.moveTo(0, 75)
  drawFillCircle({ context, radius: 20, color: '#000', x: 0, y: 50 })
  context.restore()
}

function fiveElement() {
  const element = ['金', '木', '水', '火', '土']
  context.save()
  context.beginPath()
  context.font = '15px sans-serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillStyle = '#fff'
  element.forEach((item, index) => {
    context.fillText(
      item,
      Math.cos((Math.PI / 180) * (72 * index - 90)) * 115,
      Math.sin((Math.PI / 180) * (72 * index - 90)) * 115
    )
  })
  drawStrokeCircle(context, 130)
  context.restore()
}

function drawGossip() {
  const gossip = [
    '乾一',
    '兑二',
    '离三',
    '震四',
    '巽五',
    '坎六',
    '艮七',
    '坤八'
  ]
  context.save()
  context.beginPath()
  context.font = '15px sans-serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillStyle = '#fff'
  gossip.forEach((item, index) => {
    context.fillText(
      item,
      Math.cos((Math.PI / 180) * (45 * index - 90)) * 150,
      Math.sin((Math.PI / 180) * (45 * index - 90)) * 150
    )
  })
  drawStrokeCircle(context, 170)
  context.restore()
}

function drawEarthlyBranches() {
  const earthlyBranches = [
    '子',
    '丑',
    '寅',
    '卯',
    '辰',
    '巳',
    '午',
    '未',
    '申',
    '酉',
    '戌',
    '亥'
  ]
  context.save()
  context.beginPath()
  context.font = '15px sans-serif'
  context.textAlign = 'center'
  context.fillStyle = '#fff'
  context.translate(0, 5)
  earthlyBranches.forEach((item, index) => {
    context.fillText(
      item,
      Math.cos((Math.PI / 180) * (30 * index - 90)) * 183,
      Math.sin((Math.PI / 180) * (30 * index - 90)) * 183
    )
  })
  context.save()
  context.translate(0, -5)

  drawStrokeCircle(context, 200)
  context.restore()
}

function drawHeavenlyStem() {
  const heavenlyStem = [
    '甲',
    '乙',
    '丙',
    '丁',
    '戊',
    '己',
    '庚',
    '辛',
    '壬',
    '癸'
  ]
  context.save()
  context.beginPath()
  context.font = '15px sans-serif'
  context.textAlign = 'center'
  context.fillStyle = '#fff'
  context.translate(0, 0)
  heavenlyStem.forEach((item, index) => {
    context.fillText(
      item,
      Math.cos((Math.PI / 180) * (36 * index - 90)) * 215,
      Math.sin((Math.PI / 180) * (36 * index - 90)) * 215
    )
  })
  context.save()
  context.translate(0, -5)

  drawStrokeCircle(context, 230)
  context.restore()
}

function drawHours() {
  context.save()
  context.beginPath()
  context.font = '15px sans-serif'
  context.textAlign = 'center'
  context.fillStyle = '#fff'
  context.translate(0, 0)
  for (let i = 0; i <= 23; i++) {
    context.fillText(
      i,
      Math.cos((Math.PI / 180) * (15 * i - 90)) * 245,
      Math.sin((Math.PI / 180) * (15 * i - 90)) * 245
    )
  }
  context.restore()
  context.save()
  context.translate(0, -5)
  drawStrokeCircle(context, 260)
  context.restore()
}

function drawMin() {
  context.save()
  context.beginPath()
  context.font = '15px sans-serif'
  context.textAlign = 'center'
  context.fillStyle = '#fff'
  context.translate(0, 0)
  for (let i = 0; i <= 59; i++) {
    context.fillText(
      i,
      Math.cos((Math.PI / 180) * (6 * i - 90)) * 275,
      Math.sin((Math.PI / 180) * (6 * i - 90)) * 275
    )
  }
  context.translate(0, -5)
  drawStrokeCircle(context, 290)
  context.restore()
}

function drawSec() {
  context.save()
  context.beginPath()
  context.font = '15px sans-serif'
  context.textAlign = 'center'
  context.fillStyle = '#fff'
  context.translate(0, 0)
  for (let i = 0; i <= 59; i++) {
    context.fillText(
      i,
      Math.cos((Math.PI / 180) * (6 * i - 90)) * 305,
      Math.sin((Math.PI / 180) * (6 * i - 90)) * 305
    )
  }
  context.translate(0, -5)
  drawStrokeCircle(context, 323)
  context.restore()
}

function drawer() {
  context.translate(400, 400)
  let taiChiRotate = 0
  function taiChiAnimation() {
    
    requestAnimationFrame(() => {
      drawTaiChi(taiChiRotate)
      taiChiRotate += 1
      taiChiAnimation()
    })
  }
  taiChiAnimation()
  
  fiveElement()
  drawGossip()
  drawEarthlyBranches()
  drawHeavenlyStem()
  drawHours()
  drawMin()
  drawSec()
}

drawer()

console.log(context)
