import { spriteAnimations } from './data'
import sprite from './shadow_dog.png'

export interface IView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  cw: number
  ch: number
  spriteWidth: number
  spriteHeight: number
  i: number
  dropdown: HTMLSelectElement
  mode: string
  gameFrame: number
  staggerFrames: number
  playerImage: HTMLImageElement
  getCanvasSize: () => void
  animate: () => void
}

export class View implements IView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  cw: number
  ch: number
  i: number
  dropdown: HTMLSelectElement
  mode: string
  gameFrame: number
  staggerFrames: number
  spriteWidth: number
  spriteHeight: number
  playerImage: HTMLImageElement

  constructor() {
    this.canvas = document.getElementById('canvas1') as HTMLCanvasElement
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.dropdown = document.getElementById('animations') as HTMLSelectElement
    this.getCanvasSize()
    this.spriteHeight = 523
    this.spriteWidth = 575
    this.i = 0
    this.mode = 'ko'
    this.gameFrame = 0
    this.staggerFrames = 5
    this.playerImage = new Image(this.cw, this.ch)
    this.playerImage.src = sprite

    window.addEventListener('resize', this.getCanvasSize)
    this.dropdown.addEventListener('change', e => {
      const target = e.target as HTMLOptionElement
      this.mode = target.value
    })

    this.animate()
  }

  getCanvasSize = () => {
    let size = 0
    if (window.innerWidth <= 800) size = window.innerWidth * 0.75
    else size = window.innerWidth * 0.5
    size = Math.round(size)
    this.cw = this.canvas.width = size
    this.ch = this.canvas.height = size
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.cw, this.ch)

    this.i = Math.floor(this.gameFrame / this.staggerFrames) % spriteAnimations[this.mode].loc.length
    // console.log(this.i)
    const { x, y } = spriteAnimations[this.mode].loc[this.i]
    // console.log(x,y)
    this.ctx.drawImage(this.playerImage, x, y, this.spriteWidth, this.spriteHeight, 0, 0, this.cw, this.ch)

    this.gameFrame++
    requestAnimationFrame(this.animate.bind(this))
  }
}
