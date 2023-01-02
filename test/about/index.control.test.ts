import { IController, Controller } from '../../src/about/index.control'
import { IView, View } from '../../src/about/index.view'
import { IModel, Model } from '../../src/about/index.model'

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
    document.body.innerHTML = '<div id="root">' + '</div>' + '<a href="#" class="nav-link" id="homebtn">Home</a>'
    mockElement = document.body
    spy.mockReturnValue(mockElement)
    view = new View()
    model = new Model()
    controller = new Controller(model, view)
    console.log(controller)
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  test('test', () => {
    expect(controller.view.navbar_home.textContent).toBe('Home')
  })
})
