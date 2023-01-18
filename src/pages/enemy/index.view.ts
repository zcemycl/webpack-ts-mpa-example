export interface IView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
}

export class View implements IView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  constructor() {
    this.canvas = document.getElementById('canvas1') as HTMLCanvasElement
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
  }
}
