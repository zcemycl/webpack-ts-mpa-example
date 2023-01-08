export interface IModel {
  activeIndex: number
}

export class Model implements IModel {
  activeIndex: number

  constructor() {
    this.activeIndex = 0
  }
}
