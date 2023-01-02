export interface IView {
    app: HTMLElement;
    button: HTMLElement;
    aboutbtn: HTMLElement;
    paragraph: HTMLElement;
    getElement: (selector: string) => Element|null ;
    createElement: (tag: string, className?: string) => HTMLElement;
    bindAddRandom: (handler: (num: number) => void) => void;
    displayChanges: (data: number[]) => void;
}

export class View implements IView {
    app: HTMLElement;
    button: HTMLElement;
    aboutbtn: HTMLElement;
    paragraph: HTMLElement;

    constructor() {
        this.app = this.getElement('#root') as HTMLDivElement;
        this.button = this.createElement('button') as HTMLButtonElement;
        this.button.textContent = 'New Number'
        this.aboutbtn = this.createElement('button') as HTMLButtonElement;
        this.aboutbtn.textContent = 'About'
        this.aboutbtn.onclick = () => {
            const suffix = "/about/"
            if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1"){
                location.href = "/webpack-ts-mpa-example"+suffix;
            } else {
                location.href = suffix;
            }
        }
        this.paragraph = this.createElement('h4', 'output') as HTMLHeadingElement;
        this.paragraph.innerHTML = ''
        this.app.append(this.button, this.aboutbtn, this.paragraph)
    }

    getElement(selector: string): HTMLElement {
        const element = document.querySelector(selector) as HTMLElement;
        return element
    }

    createElement(tag: string, className?: string): HTMLElement {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    }

    bindAddRandom(handler: (num: number) => void) {
        this.button.addEventListener('click', event => {
            console.log('click!!!')
            handler(Math.floor(Math.random() * 100) + 1);
        })
    }

    displayChanges(data: number[]) {
        console.log(data)
        this.paragraph.innerHTML = data.toString();
    }
}