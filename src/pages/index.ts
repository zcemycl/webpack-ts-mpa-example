import { View } from './index.view'
import { Model } from './index.model'
import { Controller } from './index.control'

let app = null

window.addEventListener('load', () => {
  app = new Controller(new Model(), new View())
  const loadingbar = document.querySelector('.loading-bar') as HTMLDivElement
  const section = document.querySelector('.section') as HTMLDivElement
  section.style.visibility = 'visible'
  loadingbar.style.display = 'none'
})

export { app }
