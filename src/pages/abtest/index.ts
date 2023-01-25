import { View } from './index.view'
import { Model } from './index.model'
import { Controller } from './index.control'

const weights = [0.5, 0.5] // probabilities
const results = ['/a', '/b'] // values to return

function getRandom() {
  const num = Math.random()
  let s = 0
  const lastIndex = weights.length - 1

  for (let i = 0; i < lastIndex; ++i) {
    s += weights[i]
    if (num < s) {
      return results[i]
    }
  }

  return results[lastIndex]
}

function randomABRedirect(l: Location) {
  const redirect_suffix = getRandom()
  const suffix = '/abtest' + redirect_suffix

  let target = ''
  console.log(suffix, 'Redirecting to ... ')
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    target = '/webpack-ts-mpa-example' + suffix
  } else {
    target = suffix
  }
  location.href = l.origin + target
}

randomABRedirect(window.location)

export const app = new Controller(new Model(), new View())
