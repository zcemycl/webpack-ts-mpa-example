import { IView, ILayer } from './types/index'

export class Layer implements ILayer {
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

    // this.x2 = this.width
  }

  update() {
    this.speed = this.view.gameSpeed * this.speedModifier
    if (this.x <= -this.width) this.x = 0

    this.x = Math.floor(this.x - this.speed)
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
      this.x + this.width,
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
