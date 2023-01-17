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

  bgLayers: ILayer[]
  i: number
  i2: number
}

export interface ILayer {
  x: number
  y: number
  aspect_ratio: number
  width: number
  height: number
  image: HTMLImageElement
  speedModifier: number
  speed: number
  view: IView
  x2: number

  update: () => void
  draw: () => void
}

class Layer implements ILayer {
  x = 0
  y = 0
  aspect_ratio = 16 / 9
  width = 2400
  height = 720
  image: HTMLImageElement
  speedModifier: number
  speed: number
  view: IView

  x2: number

  constructor(image: HTMLImageElement, speedModifier: number, view: IView) {
    this.image = image
    this.view = view
    this.speedModifier = speedModifier
    this.speed = this.view.gameSpeed * this.speedModifier

    this.x2 = this.width
  }

  update() {
    this.speed = this.view.gameSpeed * this.speedModifier
    if (this.x <= -this.width) this.x = this.width + this.x2 - this.speed

    if (this.x2 <= -this.width) this.x2 = this.width + this.x - this.speed

    this.x = Math.floor(this.x - this.speed)
    this.x2 = Math.floor(this.x2 - this.speed)
  }

  draw() {
    this.view.ctx.drawImage(
      this.image,
      this.x,
      0,
      this.height * this.aspect_ratio,
      this.height,
      0,
      0,
      this.view.cw,
      this.view.ch
    )
    this.view.ctx.drawImage(
      this.image,
      this.x2,
      0,
      this.height * this.aspect_ratio,
      this.height,
      0,
      0,
      this.view.cw,
      this.view.ch
    )
  }
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
  gameSpeed = 10
  staggerFrames = 5
  aspect_ratio = 16 / 9

  bgLayers: ILayer[] = []
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
      this.bgLayers.push(new Layer(tmpBgLayer, 0.2 * (layerid + 1), this))
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
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.cw, this.ch)
    for (const layer of this.bgLayers) {
      layer.draw()
      layer.update()
    }

    requestAnimationFrame(this.animate.bind(this))
  }
}
