import { IView } from './index.view'
import { IModel } from './index.model'
import { CognitoUserPool } from 'amazon-cognito-identity-js'
// import userPool from '../login/index'

export interface IControl {
  model: IModel
  view: IView
  userPool: CognitoUserPool
}

export class Controller implements IControl {
  model: IModel
  view: IView
  userPool: CognitoUserPool

  constructor(model: IModel, view: IView) {
    this.model = model
    this.view = view

    // try {
    //   this.userPool = userPool
    //   console.log(this.userPool.getCurrentUser())
    // } catch (e) {
    //   console.log(e)
    // }
  }
}
