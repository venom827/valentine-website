const progress = document.getElementById("progress");

let value = 0;
const duration = 2500; // total load time (ms)
const intervalTime = 25;
const step = 100 / (duration / intervalTime);

const interval = setInterval(() => {
  value += step;
  progress.style.width = value + "%";

  if (value >= 100) {
    clearInterval(interval);

    // MARK that loader has been shown
    sessionStorage.setItem("fromLoader", "true");

    setTimeout(() => {
      window.location.replace("index.html");
    }, 300);
  }
}, intervalTime);
