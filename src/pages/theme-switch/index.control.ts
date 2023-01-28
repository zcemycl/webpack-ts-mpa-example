import { IView } from './index.view'
import { IModel } from './index.model'
import { CognitoUserPool } from 'amazon-cognito-identity-js'

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

    try {
      const poolData = {
        UserPoolId: process.env.userPoolId as string,
        ClientId: process.env.clientId as string,
        // Storage: new CookieStorage({ domain: process.env.domain as string }),
      }
      this.userPool = new CognitoUserPool(poolData)
      console.log(this.userPool.getCurrentUser())
    } catch (e) {
      console.log(e)
    }
  }
}
