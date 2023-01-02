console.log("this is about page...");

const homeCallback = () => {
  const suffix = "/";
  if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
    location.href = "/webpack-ts-mpa-example" + suffix;
  } else {
    location.href = suffix;
  }
};

const app = document.querySelector("#root") as HTMLDivElement;
const homeBtn = document.createElement("button") as HTMLButtonElement;
homeBtn.textContent = "Home";
homeBtn.onclick = homeCallback;
app.append(homeBtn);

const homeBtn_nav = document.getElementById("homebtn") as HTMLButtonElement;
homeBtn_nav.onclick = homeCallback;
