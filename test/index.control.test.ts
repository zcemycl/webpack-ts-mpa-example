import { IController, Controller } from '../src/index.control'
import { IView, View } from '../src/index.view'
import { IModel, Model } from '../src/index.model'

let spy: jest.SpyInstance;
beforeAll(() => {
    spy = jest.spyOn(document, 'querySelector')
})

describe('test controller of index page', () => {
    let mockElement: HTMLDivElement;
    let view: IView;
    let model: IModel;
    let controller: IController;
    beforeAll(() => {
        mockElement = document.createElement('div')
        mockElement.setAttribute('id', 'root')
        spy.mockReturnValue(mockElement)
        jest.spyOn(View.prototype, 'getElement').mockReturnValue(mockElement)
        view = new View()
        model = new Model()
        controller = new Controller(model, view);
        console.log(controller)
    })

    afterAll(() => {
        jest.restoreAllMocks();
    })

    test('test handleAddRandom', () => {
        view.button.click();
        expect(view.paragraph.innerHTML).not.toBe('');
    })
})