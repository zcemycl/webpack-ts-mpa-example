export interface IView {
  slides: HTMLCollectionOf<HTMLElement>
  buttons: HTMLCollectionOf<HTMLElement>
  nav: HTMLElement
  nav_button: HTMLButtonElement
}

export class View implements IView {
  slides: HTMLCollectionOf<HTMLElement>
  buttons: HTMLCollectionOf<HTMLElement>
  nav: HTMLElement
  nav_button: HTMLButtonElement

  constructor() {
    this.slides = document.getElementsByTagName('article')
    this.buttons = document.getElementsByClassName('article-nav-button') as HTMLCollectionOf<HTMLElement>
    this.nav = document.querySelector('nav') as HTMLElement
    this.nav_button = document.getElementById('nav-toggle-button') as HTMLButtonElement

    window.matchMedia('(max-width: 800px)').onchange = () => {
      this.nav.dataset.transitionable = 'false'
      this.nav.dataset.toggled = 'false'
    }
  }
}
