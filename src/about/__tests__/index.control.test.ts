import { IController, Controller, homeCallback } from '../index.control'
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

  test('test navbar home', () => {
    expect(controller.view.navbar_home.textContent).toBe('Home')
  })

  test('test home callback', () => {
    expect(homeCallback()).toBe('http://localhost/')
  })
})
