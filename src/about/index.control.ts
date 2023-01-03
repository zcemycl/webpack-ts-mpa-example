import { IView } from './index.view'
import { IModel } from './index.model'

export interface IController {
  model: IModel
  view: IView
}

export const homeCallback = () => {
  const suffix = '/'
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
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

    this.view.homeBtn.onclick = homeCallback
    this.view.navbar_home.onclick = homeCallback
  }
}
