import { bg1, bg2, bg3, bg4, bg5 } from './resources/import'

export interface IView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  cw: number
  ch: number
  sm_width_percentage: number
  lg_width_percentage: number
  spriteWidth: number
  spriteHeight: number
  gameFrame: number
  gameSpeed: number
  staggerFrames: number
  aspect_ratio: number
  getCanvasSize: () => void
  animate: () => void

  bgLayers: HTMLImageElement[]
  i: number
  i2: number
}

export class View implements IView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  cw: number
  ch: number
  sm_width_percentage: number
  lg_width_percentage: number
  spriteWidth = 575
  spriteHeight = 523
  gameFrame: number
  gameSpeed = 5
  staggerFrames = 5
  aspect_ratio = 16 / 9

  bgLayers: HTMLImageElement[] = []
  i = 0
  i2 = 2400

  constructor() {
    this.canvas = document.getElementById('canvas1') as HTMLCanvasElement
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    const varStyle = getComputedStyle(document.documentElement)
    this.gameFrame = 0
    this.sm_width_percentage = parseInt(varStyle.getPropertyValue('--sm-screen-width-percentage')) / 100
    this.lg_width_percentage = parseInt(varStyle.getPropertyValue('--lg-screen-width-percentage')) / 100
    this.getCanvasSize()
    window.addEventListener('resize', this.getCanvasSize)

    const bgSrcList = [bg1, bg2, bg3, bg4, bg5]
    for (let layerid = 0; layerid < bgSrcList.length; layerid++) {
      const tmpBgLayer = new Image()
      tmpBgLayer.src = bgSrcList[layerid]
      this.bgLayers.push(tmpBgLayer)
    }

    this.animate()
  }

  getCanvasSize = () => {
    let size = 0
    if (window.innerWidth <= 800) size = window.innerWidth * this.sm_width_percentage
    else size = window.innerWidth * this.lg_width_percentage
    size = Math.round(size)
    this.cw = this.canvas.width = size
    this.ch = this.canvas.height = size / this.aspect_ratio
    // console.log(this.cw,this.cw*9/16)
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.cw, this.ch)
    // this.ctx.drawImage(this.bgLayers[0], this.i, 0)
    // this.ctx.drawImage(this.bgLayers[1], this.i, 0)
    // this.ctx.drawImage(this.bgLayers[2], this.i, 0)
    this.ctx.drawImage(this.bgLayers[3], this.i, 0, 720 * this.aspect_ratio, 720, 0, 0, this.cw, this.ch)
    this.ctx.drawImage(this.bgLayers[3], this.i2, 0, 720 * this.aspect_ratio, 720, 0, 0, this.cw, this.ch)
    if (this.i < -2400) this.i = 2400 + this.i2 - this.gameSpeed
    this.i -= this.gameSpeed
    if (this.i2 < -2400) this.i2 = 2400 + this.i - this.gameSpeed
    this.i2 -= this.gameSpeed
    requestAnimationFrame(this.animate.bind(this))
  }
}
