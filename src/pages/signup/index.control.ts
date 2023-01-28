import { IView } from './index.view'
import { IModel } from './index.model'
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js'

export interface IControl {
  model: IModel
  view: IView
  submitCallback: (event: MouseEvent) => void
  validateEnv: () => void
  signupCallback: () => void
  resetCallback: (element: HTMLElement) => void
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
    this.view.loginLink.addEventListener('click', e => {
      e.preventDefault()
      const suffix = '/login'
      console.log(suffix, 'Redirecting to ... ')
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        location.href = '/webpack-ts-mpa-example' + suffix
      } else {
        location.href = suffix
      }
    })
    this.resetCallback(this.view.inputEmail)
    this.resetCallback(this.view.inputPwd)
    this.resetCallback(this.view.inputConfirmPwd)
    this.validateEnv()
  }

  submitCallback = (event: MouseEvent) => {
    event.preventDefault()
    this.view.warnText.innerHTML = ''
    this.model.username = this.view.inputEmail.value
    this.model.password = this.view.inputPwd.value
    this.model.confirmPassword = this.view.inputConfirmPwd.value
    console.log('click!!')

    if (this.model.password !== this.model.confirmPassword) {
      this.view.warnText.innerHTML = 'Password not maching.'
      return
    }

    this.signupCallback()
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

  signupCallback = () => {
    try {
      const poolData = {
        UserPoolId: process.env.userPoolId as string,
        ClientId: process.env.clientId as string,
      }
      const userPool = new CognitoUserPool(poolData)
      const attributeEmail = new CognitoUserAttribute({
        Name: 'email',
        Value: this.model.username,
      })
      const attributePersonalName = new CognitoUserAttribute({
        Name: 'name',
        Value: '',
      })

      const attributeList = []
      attributeList.push(attributeEmail)
      attributeList.push(attributePersonalName)

      userPool.signUp(this.model.username, this.model.password, attributeList, [], (error, result) => {
        if (error) {
          this.view.warnText.innerHTML = (error as Error).message
          return
        }
        const cognitoUser = result?.user
        console.log('user name is ' + cognitoUser?.getUsername())
      })
    } catch (error) {
      this.view.warnText.innerHTML = (error as Error).message
    }
  }

  resetCallback = (element: HTMLElement) => {
    element.addEventListener('click', () => {
      this.view.warnText.innerHTML = ''
    })
    element.addEventListener('click', () => {
      this.view.warnText.innerHTML = ''
    })
  }
}
