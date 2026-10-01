// 游戏主逻辑：一个点击得分的入门小游戏
const canvas = wx.createCanvas()
const ctx = canvas.getContext('2d')

export default class Main {
  constructor() {
    this.score = 0
    this.bgColor = '#1a1a2e'
    this.render()
    this.bindEvents()
  }

  bindEvents() {
    wx.onTouchStart(() => {
      this.score += 1
      this.render()
    })
  }

  render() {
    ctx.fillStyle = this.bgColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#ffffff'
    ctx.font = '24px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('我的第一个微信小游戏', canvas.width / 2, canvas.height / 2 - 40)

    ctx.fillStyle = '#ffd700'
    ctx.font = 'bold 48px sans-serif'
    ctx.fillText(`得分: ${this.score}`, canvas.width / 2, canvas.height / 2 + 30)

    ctx.fillStyle = '#888888'
    ctx.font = '16px sans-serif'
    ctx.fillText('点击屏幕任意位置加分', canvas.width / 2, canvas.height / 2 + 80)
  }
}
