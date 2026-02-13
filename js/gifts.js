let currentAudio = null;
let currentVideo = null;

document.querySelectorAll(".play-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".gift-card");
    const video = card.querySelector("video");
    const musicSrc = btn.dataset.music;

    // Stop previous video
    if (currentVideo && currentVideo !== video) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }

    // Stop previous music
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play video
    video.play();
    currentVideo = video;

    // Play music
    const audio = new Audio(musicSrc);
    audio.play();
    currentAudio = audio;
  });
});
