export interface IModel {
  username: string
  code: string
  password: string
  confirmPassword: string
}

export class Model implements IModel {
  username = ''
  code = ''
  password = ''
  confirmPassword = ''
}
