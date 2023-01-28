import { IView } from './index.view'
import { IModel } from './index.model'
import { CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js'

export interface IControl {
  model: IModel
  view: IView

  submitCallback: (event: MouseEvent) => void
  validateEnv: () => void
  forgotCallback: () => void
  resetCallback: (event: MouseEvent) => void
  redirectCallback: (event: MouseEvent, suffix: string) => void
}

export class Controller implements IControl {
  model: IModel
  view: IView

  constructor(model: IModel, view: IView) {
    this.model = model
    this.view = view
    this.view.loginLink.addEventListener('click', e => this.redirectCallback(e, '/login'))
    this.view.signupLink.addEventListener('click', e => this.redirectCallback(e, '/signup'))
    this.view.backLink.addEventListener('click', e => this.redirectCallback(e, '/forgot'))
    this.view.submitBtn.addEventListener('click', this.submitCallback)
    this.view.resetBtn.addEventListener('click', this.resetCallback)
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

  validateEnv = () => {
    try {
      if (process.env.userPoolId === undefined || process.env.clientId === undefined) {
        this.view.inputEmail.disabled = true
        this.view.submitBtn.disabled = true
      }
      console.log('Pass process.env validation...')
    } catch (error) {
      this.view.warnText.innerHTML = (error as Error).message
    }
  }

  submitCallback = (event: MouseEvent) => {
    event.preventDefault()
    this.model.username = this.view.inputEmail.value
    console.log('click!!')
    this.view.gpBeforeCode.forEach(element => {
      element.style.display = 'none'
    })
    this.view.gpAfterCode.forEach(element => {
      element.style.display = 'flex'
    })
    this.forgotCallback()
  }

  forgotCallback = () => {
    try {
      const poolData = {
        UserPoolId: process.env.userPoolId as string,
        ClientId: process.env.clientId as string,
      }
      const userPool = new CognitoUserPool(poolData)
      const userData = { Username: this.model.username, Pool: userPool }
      const cognitoUser = new CognitoUser(userData)
      cognitoUser.forgotPassword({
        onSuccess: data => {
          console.log(data)
        },
        onFailure: error => {
          this.view.warnText.innerHTML = (error as Error).message
        },
      })
    } catch (error) {
      this.view.warnText.innerHTML = (error as Error).message
    }
  }

  resetCallback = (event: MouseEvent) => {
    event.preventDefault()
    this.model.code = this.view.inputCode.value
    this.model.password = this.view.inputPwd.value
    this.model.confirmPassword = this.view.inputConfirmPwd.value
    console.log(this.model.username, this.model.code, this.model.password)
    try {
      const poolData = {
        UserPoolId: process.env.userPoolId as string,
        ClientId: process.env.clientId as string,
      }
      const userPool = new CognitoUserPool(poolData)
      const userData = { Username: this.model.username, Pool: userPool }
      const cognitoUser = new CognitoUser(userData)
      if (this.model.password !== this.model.confirmPassword) {
        this.view.warnText.innerHTML = 'Password does not match.'
        return
      }
      cognitoUser.confirmPassword(this.model.code, this.model.password, {
        onSuccess: () => {
          this.view.infoText.innerHTML = 'Successful password reset'
        },
        onFailure: error => {
          this.view.warnText.innerHTML = (error as Error).message
        },
      })
    } catch (error) {
      this.view.warnText.innerHTML = (error as Error).message
    }
  }
}
