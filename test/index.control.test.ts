import { IController, Controller, aboutCallback } from '../src/index.control'
import { IView, View } from '../src/index.view'
import { IModel, Model } from '../src/index.model'

let spy: jest.SpyInstance
beforeAll(() => {
  spy = jest.spyOn(document, 'querySelector')
})

describe('test controller of index page', () => {
  let mockElement: HTMLElement
  let view: IView
  let model: IModel
  let controller: IController
  beforeAll(() => {
    document.body.innerHTML = '<div id="root">' + '</div>'
    mockElement = document.body
    spy.mockReturnValue(mockElement)
    jest.spyOn(View.prototype, 'getElement').mockReturnValue(mockElement)
    view = new View()
    model = new Model()
    controller = new Controller(model, view)
    console.log(controller)
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  test('test handleAddRandom', () => {
    view.button.click()
    expect(view.paragraph.innerHTML).not.toBe('')
  })

  test('test about callback', () => {
    expect(aboutCallback()).toBe('http://localhost/')
  })
})
