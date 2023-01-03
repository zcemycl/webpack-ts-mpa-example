export interface IView {
  app: HTMLElement
  navbar_home: HTMLLinkElement
  homeBtn: HTMLButtonElement
}

export class View implements IView {
  app: HTMLElement
  navbar_home: HTMLLinkElement
  homeBtn: HTMLButtonElement

  constructor() {
    console.log('this is about page...')
    this.app = document.querySelector('#root') as HTMLElement
    this.homeBtn = document.createElement('button') as HTMLButtonElement
    this.homeBtn.textContent = 'Home'
    this.app.append(this.homeBtn)

    this.navbar_home = document.getElementById('homebtn') as HTMLLinkElement
  }
}
