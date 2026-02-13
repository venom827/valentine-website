const music = document.getElementById("bgMusic");

if (sessionStorage.getItem("musicStarted") === "true") {
  music.play().catch(err => {
    console.log("Resume blocked:", err);
  });
}
