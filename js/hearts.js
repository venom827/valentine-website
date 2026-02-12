const container = document.getElementById("background-hearts");

/* -------------------------
   CREATE ONE HEART
------------------------- */
function createHeart(startInside = false) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "❤";

  // Horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // Size
  const size = 18 + Math.random() * 20;
  heart.style.fontSize = size + "px";

  // Speed (noticeable)
  const duration = 6 + Math.random() * 4;
  heart.style.animationDuration = duration + "s";

  // THIS is the key 👇
  if (startInside) {
    // Already falling on screen
    heart.style.top = Math.random() * 100 + "vh";

    // Start animation mid-way so it is MOVING immediately
    heart.style.animationDelay = `-${Math.random() * duration}s`;
  }

  container.appendChild(heart);

  // Cleanup
  setTimeout(() => heart.remove(), duration * 1000);
}

/* -------------------------
   INSTANT FIRST FRAME
------------------------- */
// Big burst IMMEDIATELY
for (let i = 0; i < 30; i++) {
  createHeart(true);
}

/* -------------------------
   CONTINUOUS FALL
------------------------- */
setInterval(() => {
  for (let i = 0; i < 10; i++) {
    createHeart(false);
  }
}, 500);
