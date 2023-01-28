import { IModel } from './index.model'
import { IView } from './index.view'
import { CognitoUserPool } from 'amazon-cognito-identity-js'

export interface IController {
  model: IModel
  view: IView
  onDataChanged: (data: number[]) => void
  handleAddRandom: (num: number) => void
}

export const aboutCallback = () => {
  const suffix = '/about/'
  if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
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

    this.view.aboutbtn.onclick = aboutCallback
    this.model.bindDataChanged(this.onDataChanged)
    this.view.bindAddRandom(this.handleAddRandom)

    this.onDataChanged(this.model.data)

    this.view.nextbtn.onclick = this.handleNextClick
    this.view.prevbtn.onclick = this.handlePrevClick

    try {
      const poolData = {
        UserPoolId: process.env.userPoolId as string,
        ClientId: process.env.clientId as string,
        // Storage: new CookieStorage({ domain: process.env.domain as string }),
      }
      const userPool = new CognitoUserPool(poolData)
      console.log(userPool.getCurrentUser())
    } catch (e) {
      console.log(e)
    }
  }

  onDataChanged = (data: number[]) => {
    console.log('changed data')
    this.view.displayChanges(data)
  }

  handleAddRandom = (num: number) => {
    this.model.addRandom(num)
  }

  handleNextClick = () => {
    const nextIndex = this.model.activeIndex + 1 <= this.view.groups.length - 1 ? this.model.activeIndex + 1 : 0
    const currentGroup = document.querySelector(`[data-index="${this.model.activeIndex}"]`) as HTMLElement
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`) as HTMLElement

    currentGroup.dataset.status = 'after'

    nextGroup.dataset.status = 'becoming-active-from-before'

    setTimeout(() => {
      nextGroup.dataset.status = 'active'
      this.model.activeIndex = nextIndex
    })
  }

  handlePrevClick = () => {
    const nextIndex = this.model.activeIndex - 1 >= 0 ? this.model.activeIndex - 1 : this.view.groups.length - 1
    const currentGroup = document.querySelector(`[data-index="${this.model.activeIndex}"]`) as HTMLElement
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`) as HTMLElement

    currentGroup.dataset.status = 'before'

    nextGroup.dataset.status = 'becoming-active-from-after'

    setTimeout(() => {
      nextGroup.dataset.status = 'active'
      this.model.activeIndex = nextIndex
    })
  }
}
