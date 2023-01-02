import { IModel } from './index.model'
import { IView } from './index.view'

export interface IController {
  model: IModel
  view: IView
  onDataChanged: (data: number[]) => void
  handleAddRandom: (num: number) => void
}

export const aboutCallback = () => {
  const suffix = '/about/'
  if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
    location.href = '/webpack-ts-mpa-example' + suffix
  } else {
    location.href = suffix
  }
  return location.href
}

export class Controller implements IController {
  model: IModel
  view: IView

  constructor(model: IModel, view: IView) {
    this.model = model
    this.view = view

    this.view.aboutbtn.onclick = aboutCallback
    this.model.bindDataChanged(this.onDataChanged)
    this.view.bindAddRandom(this.handleAddRandom)

    this.onDataChanged(this.model.data)
  }

  onDataChanged = (data: number[]) => {
    console.log('changed data')
    this.view.displayChanges(data)
  }

  handleAddRandom = (num: number) => {
    this.model.addRandom(num)
  }
}
