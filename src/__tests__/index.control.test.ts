import { IController, Controller, aboutCallback } from '../index.control'
import { IView, View } from '../index.view'
import { IModel, Model } from '../index.model'

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

  test.each`
    hostname               | expected
    ${'localhost'}         | ${'/about/'}
    ${'zcemycl.github.io'} | ${'/webpack-ts-mpa-example/about/'}
  `('test about callback', ({ hostname, expected }) => {
    const location: Location = window.location
    jest.spyOn(window, 'location', 'get').mockReturnValue({
      ...location,
      hostname: hostname,
    })
    expect(aboutCallback()).toBe(expected)
  })
})
