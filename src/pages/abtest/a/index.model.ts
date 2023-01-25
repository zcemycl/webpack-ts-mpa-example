export interface IModel {
  data: number[]
}

export class Model implements IModel {
  data: number[]

  constructor() {
    this.data = [1, 2]
  }
}
