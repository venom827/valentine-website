const container = document.getElementById("background-hearts");

function spawnBurst() {
  const count = 12; // clean & noticeable

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = "❤";

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // Size variation
    const size = 18 + Math.random() * 14;
    heart.style.fontSize = size + "px";

    // Slow, calm fall
    const duration = 11 + Math.random() * 4;
    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    // Cleanup
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}

// Immediate burst on page load
spawnBurst();

// Repeat every ~5.5 seconds
setInterval(spawnBurst, 5500);
