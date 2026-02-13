const container = document.getElementById("background-hearts");

function createHeart(startInside = false) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "❤";

  // Horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // Size
  const size = 14 + Math.random() * 18;
  heart.style.fontSize = size + "px";

  // Fast fall
  const duration = 4 + Math.random() * 3; // 4–7s
  heart.style.animationDuration = duration + "s";

  if (startInside) {
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.animationDelay = `-${Math.random() * duration}s`;
  } else {
    heart.style.top = "-12vh";
    heart.style.animationDelay = "0s";
  }

  container.appendChild(heart);

  setTimeout(() => heart.remove(), (duration + 0.5) * 1000);
}

/* -------------------------
   FORCE IMMEDIATE PAINT
------------------------- */
requestAnimationFrame(() => {
  for (let i = 0; i < 50; i++) {
    createHeart(true);
  }
});

/* -------------------------
   CONTINUOUS RAIN
------------------------- */
setInterval(() => {
  createHeart(false);
  createHeart(false);
}, 100); // dense but smooth
