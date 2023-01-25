import { View } from './index.view'
import { Model } from './index.model'
import { Controller } from './index.control'

function changeDisplayURL(l: Location) {
  const suffix = '/abtest'
  let target = ''
  console.log('a test')
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    target = '/webpack-ts-mpa-example' + suffix
  } else {
    target = suffix
  }
  window.history.replaceState(null, '', l.origin + target)
}

changeDisplayURL(window.location)

export const app = new Controller(new Model(), new View())
