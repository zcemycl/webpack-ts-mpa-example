import { IView } from './view'

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
