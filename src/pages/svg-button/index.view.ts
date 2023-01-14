export interface IView {
  app: HTMLElement
  buttons: HTMLElement[]
  buttonThree: HTMLButtonElement
}

export class View implements IView {
  app: HTMLElement
  buttons: HTMLElement[]
  buttonThree: HTMLButtonElement

  constructor() {
    this.app = document.querySelector('#root') as HTMLElement
    this.buttons = document.querySelectorAll('button') as unknown as HTMLElement[]
    this.buttonThree = document.querySelector('.button-three') as HTMLButtonElement
  }
}
