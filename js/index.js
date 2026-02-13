// If user refreshed index.html, send them back to loader
if (!sessionStorage.getItem("fromLoader")) {
  window.location.replace("loader.html");
} else {
  // Clear flag so next refresh shows loader again
  sessionStorage.removeItem("fromLoader");
}
const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  // mark that music has started
  sessionStorage.setItem("musicStarted", "true");

  // play music
  music.play().catch(() => {});
});
