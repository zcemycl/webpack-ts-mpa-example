declare global {
  interface IGlobals {
    a: string
    func_a: () => void
  }
}

export const a = 1
export const func_a = () => console.log('hello world')
