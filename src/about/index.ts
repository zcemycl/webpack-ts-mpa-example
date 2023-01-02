console.log('this is about page...')

const app = document.querySelector('#root') as HTMLDivElement;
const homeBtn = document.createElement('button') as HTMLButtonElement;
homeBtn.textContent = "Home"
homeBtn.onclick = () => {
    const suffix = "/"
    if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1"){
        location.href = "/webpack-ts-mpa-example"+suffix;
    } else {
        location.href = suffix;
    }
}
app.append(homeBtn);