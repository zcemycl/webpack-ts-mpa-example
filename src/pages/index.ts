import { View } from './index.view'
import { Model } from './index.model'
import { Controller } from './index.control'

let app = null

window.addEventListener('load', () => {
  app = new Controller(new Model(), new View())
  const loadingbar = document.querySelector('.loading-bar') as HTMLDivElement
  const content = document.querySelector('.content-after-loading') as HTMLDivElement
  loadingbar.classList.toggle('off')
  content.classList.toggle('on')
})

export { app }
