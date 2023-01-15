import { IView } from './index.view'
import { IModel } from './index.model'
import * as THREE from 'three'
import { GUI } from 'dat.gui'

export interface IController {
  model: IModel
  view: IView
  addPropertiesControl: (obj: THREE.Mesh, title: string) => void
}

export class Controller implements IController {
  model: IModel
  view: IView

  constructor(model: IModel, view: IView) {
    this.model = model
    this.view = view
    this.addPropertiesControl(this.view.cube, 'Cube')
    this.addPropertiesControl(this.view.object2, 'Green Sphere')
  }

  addPropertiesControl = (obj: THREE.Mesh, title: string) => {
    const gui = new GUI()
    const objFolder = gui.addFolder(title)
    const objRotationFolder = objFolder.addFolder('Rotation')
    objRotationFolder.add(obj.rotation, 'x', 0, Math.PI * 2)
    objRotationFolder.add(obj.rotation, 'y', 0, Math.PI * 2)
    objRotationFolder.add(obj.rotation, 'z', 0, Math.PI * 2)
    objFolder.open()
    objRotationFolder.close()
    const objPositionFolder = objFolder.addFolder('Position')
    objPositionFolder.add(obj.position, 'x', -10, 10, 2)
    objPositionFolder.add(obj.position, 'y', -10, 10, 2)
    objPositionFolder.add(obj.position, 'z', -10, 10, 2)
    objFolder.open()
    objPositionFolder.close()
    const objScaleFolder = objFolder.addFolder('Scale')
    objScaleFolder.add(obj.scale, 'x', -5, 5)
    objScaleFolder.add(obj.scale, 'y', -5, 5)
    objScaleFolder.add(obj.scale, 'z', -5, 5)
    objFolder.add(obj, 'visible')
    objFolder.close()
    objScaleFolder.close()
  }
}
