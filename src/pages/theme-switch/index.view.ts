export interface IView {
  app: HTMLElement
  colorThemes: NodeListOf<HTMLInputElement>
  storeTheme: (theme: string) => void
  retrieveTheme: () => void
  setTheme: (theme: string) => void
}

export class View implements IView {
  app: HTMLElement
  colorThemes: NodeListOf<HTMLInputElement>

  constructor() {
    this.app = document.querySelector('#root') as HTMLElement
    this.colorThemes = document.querySelectorAll("[name='theme']") as NodeListOf<HTMLInputElement>

    this.colorThemes.forEach(themeOption => {
      themeOption.addEventListener('click', () => {
        this.storeTheme(themeOption.id)
      })
    })

    this.retrieveTheme()
  }

  storeTheme = (theme: string) => {
    console.log(theme)
    localStorage.setItem('theme', theme)
    this.setTheme(theme as string)
  }

  retrieveTheme = () => {
    let activeTheme = localStorage.getItem('theme')
    console.log(activeTheme)
    if (activeTheme === null) activeTheme = 'light'
    this.colorThemes.forEach(themeOption => {
      if (themeOption.id === activeTheme) themeOption.checked = true
      else themeOption.checked = false
    })
    this.setTheme(activeTheme as string)
  }

  setTheme = (theme: string) => {
    document.documentElement.className = theme
  }
}
