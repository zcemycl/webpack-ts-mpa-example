export interface IView {
  app: HTMLElement
}

export class View implements IView {
  app: HTMLElement

  constructor() {
    this.app = document.querySelector('#root') as HTMLElement
  }
}
