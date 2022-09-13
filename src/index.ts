import { View } from './index.view'
import { Model } from './index.model'
import { Controller } from './index.control'

console.log('this is the index page...')
const app = new Controller( new Model(), new View() );