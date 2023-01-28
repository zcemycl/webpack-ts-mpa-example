export interface IView {
  inputEmail: HTMLInputElement
  inputPwd: HTMLInputElement
  inputConfirmPwd: HTMLInputElement
  submitBtn: HTMLButtonElement
  warnText: HTMLDivElement
  forgotLink: HTMLButtonElement
  signupLink: HTMLButtonElement
}

export class View implements IView {
  inputEmail: HTMLInputElement
  submitBtn: HTMLButtonElement
  inputPwd: HTMLInputElement
  inputConfirmPwd: HTMLInputElement
  warnText: HTMLDivElement
  forgotLink: HTMLButtonElement
  signupLink: HTMLButtonElement

  constructor() {
    this.inputEmail = document.querySelector('[name="email"]') as HTMLInputElement
    this.submitBtn = document.querySelector('button.submit') as HTMLButtonElement
    this.inputPwd = document.querySelector('[name="pwd"]') as HTMLInputElement
    this.inputConfirmPwd = document.querySelector('[name="confirmpwd"]') as HTMLInputElement
    this.warnText = document.querySelector('div.warn') as HTMLDivElement
    this.forgotLink = document.querySelector('button.forgot') as HTMLButtonElement
    this.signupLink = document.querySelector('button.signup') as HTMLButtonElement
  }
}
