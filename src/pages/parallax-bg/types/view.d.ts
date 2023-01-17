export interface IView {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  slider: HTMLInputElement
  showGameSpeed: HTMLSpanElement
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
