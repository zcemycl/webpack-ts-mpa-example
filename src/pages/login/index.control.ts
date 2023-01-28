import { IView } from './index.view'
import { IModel } from './index.model'
// import * as AWS from 'aws-sdk/global';
// import { Config, CognitoIdentityCredentials } from 'aws-sdk'
import { AuthenticationDetails, CognitoUserPool, CognitoUser, CookieStorage } from 'amazon-cognito-identity-js'

export interface IControl {
  model: IModel
  view: IView
  userPool: CognitoUserPool

  submitCallback: (event: MouseEvent) => void
  validateEnv: () => void
  loginCallback: () => void
  redirectCallback: (event: MouseEvent, suffix: string) => void
}

export class Controller implements IControl {
  model: IModel
  view: IView
  userPool: CognitoUserPool

  constructor(model: IModel, view: IView) {
    this.model = model
    this.view = view
    this.view.submitBtn.addEventListener('click', this.submitCallback)
    this.view.forgotLink.addEventListener('click', e => this.redirectCallback(e, '/forgot'))
    this.view.signupLink.addEventListener('click', e => this.redirectCallback(e, '/signup'))

    this.validateEnv()
  }

  redirectCallback = (event: MouseEvent, suffix: string) => {
    event.preventDefault()
    console.log(suffix, 'Redirecting to ... ')
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      location.href = '/webpack-ts-mpa-example' + suffix
    } else {
      location.href = suffix
    }
  }

  submitCallback = (event: MouseEvent) => {
    event.preventDefault()
    this.model.username = this.view.inputEmail.value
    this.model.password = this.view.inputPwd.value
    console.log('click!!')
    this.loginCallback()
  }

  validateEnv = () => {
    try {
      if (process.env.userPoolId === undefined || process.env.clientId === undefined) {
        this.view.inputEmail.disabled = true
        this.view.inputPwd.disabled = true
        this.view.inputConfirmPwd.disabled = true
        this.view.submitBtn.disabled = true
      }
      console.log('Pass process.env validation...')
    } catch (error) {
      this.view.warnText.innerHTML = (error as Error).message
    }
  }

  loginCallback = () => {
    try {
      const poolData = {
        UserPoolId: process.env.userPoolId as string,
        ClientId: process.env.clientId as string,
        Storage: new CookieStorage({ domain: process.env.domain as string }),
      }
      const userPool = new CognitoUserPool(poolData)
      this.userPool = userPool

      const authData = {
        Username: this.model.username,
        Password: this.model.password,
        Storage: new CookieStorage({ domain: process.env.domain as string }),
      }
      const authDetails = new AuthenticationDetails(authData)

      const userData = { Username: this.model.username, Pool: userPool }
      const cognitoUser = new CognitoUser(userData)

      cognitoUser.authenticateUser(authDetails, {
        onSuccess: result => {
          console.log(result)
          const accessToken = result.getAccessToken().getJwtToken()
          console.log(accessToken)
        },
        onFailure: error => {
          console.log(error)
          this.view.warnText.innerHTML = (error as Error).message
        },
      })
    } catch (error) {
      this.view.warnText.innerHTML = (error as Error).message
    }
  }
}
