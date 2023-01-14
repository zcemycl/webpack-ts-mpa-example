export interface IModel {
  suffix: string
}

export class Model implements IModel {
  suffix: string

  constructor() {
    this.suffix = '/'
  }
}
