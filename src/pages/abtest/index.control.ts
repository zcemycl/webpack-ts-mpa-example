import { IView } from './index.view'
import { IModel } from './index.model'

export interface IControl {
  model: IModel
  view: IView
}

export class Controller implements IControl {
  model: IModel
  view: IView

  constructor(model: IModel, view: IView) {
    this.model = model
    this.view = view
  }
}
