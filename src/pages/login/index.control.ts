import { IView } from './index.view'
import { IModel } from './index.model'
// import * as AWS from 'aws-sdk/global';
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js'

export interface IControl {
  model: IModel
  view: IView

  submitCallback: (event: MouseEvent) => void
  validateEnv: () => void
  loginCallback: () => void
}

export class Controller implements IControl {
  model: IModel
  view: IView

  constructor(model: IModel, view: IView) {
    this.model = model
    this.view = view
    this.view.submitBtn.addEventListener('click', this.submitCallback)
    this.view.forgotLink.addEventListener('click', e => {
      e.preventDefault()
      const suffix = '/forgot'
      console.log(suffix, 'Redirecting to ... ')
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        location.href = '/webpack-ts-mpa-example' + suffix
      } else {
        location.href = suffix
      }
    })
    this.view.signupLink.addEventListener('click', e => {
      e.preventDefault()
      const suffix = '/signup'
      console.log(suffix, 'Redirecting to ... ')
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        location.href = '/webpack-ts-mpa-example' + suffix
      } else {
        location.href = suffix
      }
    })

    this.validateEnv()
  }

  submitCallback = (event: MouseEvent) => {
    event.preventDefault()
    this.model.username = this.view.inputEmail.value
    this.model.password = this.view.inputPwd.value
    // this.model.confirmPassword = this.view.inputConfirmPwd.value;
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
      }
      const userPool = new CognitoUserPool(poolData)

      const authData = { Username: this.model.username, Password: this.model.password }
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
