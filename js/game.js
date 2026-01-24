// =========================
// MEMORY GAME (EMOJI VERSION)
// =========================

const cards = document.querySelectorAll(".game-card");
const touchEl = document.getElementById("touchCount");
const matchEl = document.getElementById("matchCount");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

const winScreen = document.getElementById("winScreen");
const finalMovesEl = document.getElementById("finalMoves");
const playAgainBtn = document.getElementById("playAgainBtn");

const EMOJIS = ["💫", "🌙", "🤍", "🌟", "🌷", "💘"];
const TOTAL_MATCHES = EMOJIS.length;

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let touches = 0;
let matches = 0;

// =========================
// INIT / RESET
// =========================
function initGame() {
  // Reset state
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  touches = 0;
  matches = 0;

  touchEl.textContent = "0";
  matchEl.textContent = "0";

  nextBtn.style.opacity = "0";
  nextBtn.style.pointerEvents = "none";
  winScreen.classList.add("hidden");

  // Create & shuffle emoji pairs
  const emojiPairs = shuffleArray([...EMOJIS, ...EMOJIS]);

  cards.forEach((card, index) => {
    card.classList.remove("flipped");
    card.style.opacity = "1";
    card.style.pointerEvents = "auto";

    card.querySelector(".card-front").textContent = emojiPairs[index];

    // Remove old listeners before re-adding
    card.replaceWith(card.cloneNode(true));
  });

  // Re-select cards after cloning
  document.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", handleCardClick);
  });
}

// =========================
// CARD CLICK
// =========================
function handleCardClick() {
  if (lockBoard) return;
  if (this.classList.contains("flipped")) return;

  this.classList.add("flipped");
  touches++;
  touchEl.textContent = touches;

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  checkMatch();
}

// =========================
function checkMatch() {
  const isMatch =
    firstCard.querySelector(".card-front").textContent ===
    secondCard.querySelector(".card-front").textContent;

  isMatch ? lockMatch() : unflipCards();
}

// =========================
function lockMatch() {
  matches++;
  matchEl.textContent = matches;

  firstCard.style.pointerEvents = "none";
  secondCard.style.pointerEvents = "none";

  resetTurn();

  if (matches === TOTAL_MATCHES) {
    endGame();
  }
}

// =========================
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetTurn();
  }, 700);
}

// =========================
function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

// =========================
// END GAME
// =========================
function endGame() {
  cards.forEach(card => {
    card.style.opacity = "0.35";
    card.style.pointerEvents = "none";
  });

  finalMovesEl.textContent = touches;
  winScreen.classList.remove("hidden");

  nextBtn.style.opacity = "1";
  nextBtn.style.pointerEvents = "auto";
}

// =========================
// SHUFFLE (Fisher–Yates)
// =========================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// =========================
// EVENTS
// =========================
resetBtn.addEventListener("click", initGame);
playAgainBtn.addEventListener("click", initGame);

// Start game on load
initGame();
