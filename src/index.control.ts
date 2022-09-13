import { IModel } from './index.model'
import { IView } from './index.view'

export class Controller {
    model: IModel
    view: IView

    constructor(model: IModel, view: IView) {
        this.model = model
        this.view = view

        this.model.bindDataChanged(this.onDataChanged)
        this.view.bindAddRandom(this.handleAddRandom)

        this.onDataChanged(this.model.data)
    }

    onDataChanged = (data: number[]) => {
        console.log('changed data')
        this.view.displayChanges(data)
    }

    handleAddRandom = (num: number) => {
        this.model.addRandom(num)
    }
}
