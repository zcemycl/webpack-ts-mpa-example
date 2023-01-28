export interface IModel {
  username: string
  password: string
  confirmPassword: string
}

export class Model implements IModel {
  username = ''
  password = ''
  confirmPassword = ''
}
