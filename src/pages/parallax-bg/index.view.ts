import { IView, ILayer } from './types/index'
import { Layer } from './layer'
import { bg1, bg2, bg3, bg4, bg5 } from './resources/import'

class View implements IView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  slider: HTMLInputElement
  showGameSpeed: HTMLSpanElement
  cw: number
  ch: number
  sm_width_percentage: number
  lg_width_percentage: number
  spriteWidth = 575
  spriteHeight = 523
  gameFrame = 0
  gameSpeed = 10
  staggerFrames = 5
  aspect_ratio = 16 / 9

  bgLayers: ILayer[] = []
  i = 0
  i2 = 2400

  constructor() {
    this.canvas = document.getElementById('canvas1') as HTMLCanvasElement
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.slider = document.getElementById('slider') as HTMLInputElement
    this.slider.value = this.gameSpeed.toString()
    this.showGameSpeed = document.getElementById('showGameSpeed') as HTMLSpanElement
    this.showGameSpeed.innerHTML = this.gameSpeed.toString()
    const varStyle = getComputedStyle(document.documentElement)
    this.gameFrame = 0
    this.sm_width_percentage = parseInt(varStyle.getPropertyValue('--sm-screen-width-percentage')) / 100
    this.lg_width_percentage = parseInt(varStyle.getPropertyValue('--lg-screen-width-percentage')) / 100
    this.getCanvasSize()

    window.addEventListener('resize', this.getCanvasSize)
    this.slider.addEventListener('change', e => {
      const target = e.target as HTMLInputElement
      this.gameSpeed = parseInt(target.value)
      this.showGameSpeed.innerHTML = target.value
    })

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
    // this.gameFrame ++;
    requestAnimationFrame(this.animate.bind(this))
  }
}

export { View, IView }
