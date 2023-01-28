export interface IView {
  inputEmail: HTMLInputElement
  submitBtn: HTMLButtonElement
  warnText: HTMLDivElement
  infoText: HTMLDivElement
  loginLink: HTMLButtonElement
  signupLink: HTMLButtonElement
  gpBeforeCode: NodeListOf<HTMLElement>
  gpAfterCode: NodeListOf<HTMLElement>
  inputCode: HTMLInputElement
  inputPwd: HTMLInputElement
  inputConfirmPwd: HTMLInputElement
  resetBtn: HTMLButtonElement
  backLink: HTMLButtonElement
}

export class View implements IView {
  inputEmail = document.querySelector('[name="email"]') as HTMLInputElement
  submitBtn = document.querySelector('button.submit') as HTMLButtonElement
  warnText = document.querySelector('div.warn') as HTMLDivElement
  infoText = document.querySelector('div.info') as HTMLDivElement
  loginLink = document.querySelector('button.login') as HTMLButtonElement
  signupLink = document.querySelector('button.signup') as HTMLButtonElement
  gpBeforeCode = document.querySelectorAll('.before-code') as NodeListOf<HTMLElement>
  gpAfterCode = document.querySelectorAll('.after-code') as NodeListOf<HTMLElement>
  inputCode = document.querySelector('[name="code"]') as HTMLInputElement
  inputPwd = document.querySelector('[name="pwd"]') as HTMLInputElement
  inputConfirmPwd = document.querySelector('[name="confirmpwd"]') as HTMLInputElement
  resetBtn = document.querySelector('button.reset') as HTMLButtonElement
  backLink = document.querySelector('button.back') as HTMLButtonElement
}
