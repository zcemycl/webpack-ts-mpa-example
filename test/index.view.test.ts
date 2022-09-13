import { IView, View } from '../src/index.view'

let spy: jest.SpyInstance;
beforeAll(() => {
    spy = jest.spyOn(document, 'querySelector')
})

describe('test view of index page', () => {
    let mockElement: any;
    let view: IView;
    beforeAll(() => {
        mockElement = document.createElement('div')
        mockElement.setAttribute('id', 'root')
        spy.mockReturnValue(mockElement)
        jest.spyOn(View.prototype, 'getElement').mockReturnValue(mockElement)
        view = new View()
    })

    afterAll(() => {
        jest.restoreAllMocks();
    })

    test('test constructor', () => {
        // expect(view.getElement).toBeCalledTimes(1);
        expect(view.button.textContent).toBe('New Number');
        expect(view.paragraph.innerHTML).toBe('');
    })

    test('test displayChanges', () => {
        view.displayChanges([3,4,5]);
        expect(view.paragraph.innerHTML).not.toBe('');
    })
})