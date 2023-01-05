import { IModel } from './index.model'
import { IView } from './index.view'

export interface IController {
  model: IModel
  view: IView
  handleLeftClick: () => void
  handleRightClick: () => void
  handleNavToggle: () => void
}

export class Controller implements IController {
  model: IModel
  view: IView

  constructor(model: IModel, view: IView) {
    this.model = model
    this.view = view

    this.view.nav_button.onclick = this.handleNavToggle
    // this.view.buttons[0].addEventListener('click', () => {
    //     this.handleLeftClick.bind(this)
    // })
    // console.log(this.view.buttons)
    for (let i = 0; i < this.view.buttons.length; i++) {
      if (i % 2 == 0) this.view.buttons[i].onclick = this.handleLeftClick
      else this.view.buttons[i].onclick = this.handleRightClick
    }
  }

  handleLeftClick = () => {
    const nextIndex = this.model.activeIndex - 1 >= 0 ? this.model.activeIndex - 1 : this.view.slides.length - 1
    const currentSlide = document.querySelector(`[data-index="${this.model.activeIndex}"]`) as HTMLElement
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`) as HTMLElement

    currentSlide.dataset.status = 'after'
    nextSlide.dataset.status = 'becoming-active-from-before'

    setTimeout(() => {
      nextSlide.dataset.status = 'active'
      this.model.activeIndex = nextIndex
    })
  }

  handleRightClick = () => {
    const nextIndex = this.model.activeIndex + 1 <= this.view.slides.length - 1 ? this.model.activeIndex + 1 : 0
    const currentSlide = document.querySelector(`[data-index="${this.model.activeIndex}"]`) as HTMLElement
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`) as HTMLElement

    currentSlide.dataset.status = 'before'
    nextSlide.dataset.status = 'becoming-active-from-after'

    setTimeout(() => {
      nextSlide.dataset.status = 'active'
      this.model.activeIndex = nextIndex
    })
  }

  handleNavToggle = () => {
    this.view.nav.dataset.transitionable = 'true'
    this.view.nav.dataset.toggled = this.view.nav.dataset.toggled === 'true' ? 'false' : 'true'
  }
}
