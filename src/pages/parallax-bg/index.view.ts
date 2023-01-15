import bg1 from './resources/layer-1.png'
import bg2 from './resources/layer-2.png'
import bg3 from './resources/layer-3.png'
import bg4 from './resources/layer-4.png'
import bg5 from './resources/layer-5.png'

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
  staggerFrames: number
  getCanvasSize: () => void
  animate: () => void

  bgLayer1: HTMLImageElement
  bgLayer2: HTMLImageElement
  bgLayer3: HTMLImageElement
  bgLayer4: HTMLImageElement
  bgLayer5: HTMLImageElement
  i: number
}

export class View implements IView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  cw: number
  ch: number
  sm_width_percentage: number
  lg_width_percentage: number
  spriteWidth: number
  spriteHeight: number
  gameFrame: number
  staggerFrames: number

  bgLayer1: HTMLImageElement
  bgLayer2: HTMLImageElement
  bgLayer3: HTMLImageElement
  bgLayer4: HTMLImageElement
  bgLayer5: HTMLImageElement
  i: number

  constructor() {
    this.canvas = document.getElementById('canvas1') as HTMLCanvasElement
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    const varStyle = getComputedStyle(document.documentElement)
    this.gameFrame = 0
    this.staggerFrames = 5
    this.spriteHeight = 523
    this.spriteWidth = 575
    this.sm_width_percentage = parseInt(varStyle.getPropertyValue('--sm-screen-width-percentage')) / 100
    this.lg_width_percentage = parseInt(varStyle.getPropertyValue('--lg-screen-width-percentage')) / 100
    this.getCanvasSize()
    window.addEventListener('resize', this.getCanvasSize)

    this.bgLayer1 = new Image()
    this.bgLayer1.src = bg1
    this.bgLayer2 = new Image()
    this.bgLayer2.src = bg2
    this.bgLayer3 = new Image()
    this.bgLayer3.src = bg3
    this.bgLayer4 = new Image()
    this.bgLayer4.src = bg4
    this.bgLayer5 = new Image()
    this.bgLayer5.src = bg5
    this.i = 0

    this.animate()
  }

  getCanvasSize = () => {
    let size = 0
    if (window.innerWidth <= 800) size = window.innerWidth * this.sm_width_percentage
    else size = window.innerWidth * this.lg_width_percentage
    size = Math.round(size)
    this.cw = this.canvas.width = size
    this.ch = this.canvas.height = size
  }

  animate = () => {
    this.ctx.drawImage(this.bgLayer1, this.i, 0)
    this.ctx.drawImage(this.bgLayer2, this.i, 0)
    this.ctx.drawImage(this.bgLayer3, this.i, 0)
    this.ctx.drawImage(this.bgLayer4, this.i, 0)
    this.i++
    requestAnimationFrame(this.animate.bind(this))
  }
}
