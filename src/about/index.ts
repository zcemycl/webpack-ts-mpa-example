console.log('this is about page...')

const app = document.querySelector('#root') as HTMLDivElement;
const homeBtn = document.createElement('button') as HTMLButtonElement;
homeBtn.textContent = "Home"
homeBtn.onclick = () => {
    location.href = "/";
}
app.append(homeBtn);