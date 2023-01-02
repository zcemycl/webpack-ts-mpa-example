import { Model } from '../src/index.model'

const model = new Model()

describe('test model of index page', () => {
  test('test model data', () => {
    expect(model.data.length).toBe(0)
  })

  test('test model addRandom func', () => {
    const newEle = 3
    model.addRandom(newEle)
    expect(model.data.length).toBe(1)
    expect(model.data[0]).toBe(newEle)
  })
})
