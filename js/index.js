document.addEventListener("DOMContentLoaded", () => {
  const hello = document.getElementById("helloText");
  const start = document.getElementById("startScreen");

  // After hello finishes (~3s), fade it out
  setTimeout(() => {
    hello.classList.add("hello-exit");
  }, 3000);

  // After exit animation, show full screen button
  setTimeout(() => {
    hello.style.display = "none";
    start.classList.remove("hidden");
    start.classList.add("start-show");
  }, 3800);
});
