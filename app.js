const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");
const movieList = [
  "videos/hero-1.mp4",
  "videos/hero-2.mp4",
  "videos/hero-3.mp4",
  "videos/hero-4.mp4",
];
let index = 0;

nextButton.addEventListener("click", function () {
  index += 1;
  if (index >= movieList.length) {
    index = 0;
  }
  video.src = movieList[index];
});
