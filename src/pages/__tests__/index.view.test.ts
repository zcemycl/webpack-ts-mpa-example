// import { IView, View } from '../index.view'
import * as Test from '../index.view'

let spy: jest.SpyInstance
beforeAll(() => {
  spy = jest.spyOn(document, 'querySelector')
})

describe('test view of index page', () => {
  let mockElement: HTMLElement
  let view: Test.IView
  beforeAll(() => {
    document.body.innerHTML =
      '<div class="card-group">' +
      '<button id="prev-button"' +
      '</button>' +
      '<button id="next-button"' +
      '</button>' +
      '</div>' +
      '<div id="root">' +
      '</div>' +
      '<a href="#" class="nav-link" id="homebtn">Home</a>'
    mockElement = document.body
    console.log(mockElement)
    spy.mockReturnValue(mockElement)
    view = new Test.View()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  test('test constructor', () => {
    expect(view.button.textContent).toBe('New Number')
    expect(view.aboutbtn.textContent).toBe('About')
    expect(view.paragraph.innerHTML).toBe('')
  })

  test('test displayChanges', () => {
    view.displayChanges([3, 4, 5])
    expect(view.paragraph.innerHTML).not.toBe('')
  })

  test('test bindAddRandom', () => {
    const logSpy = jest.spyOn(console, 'log')
    view.bindAddRandom((num: number) => {
      console.log(num)
    })
    view.button.click()
    expect(console.log).toBeCalled()
    expect(logSpy).toHaveBeenCalledWith('click!!!')
  })
})
