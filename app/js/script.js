let slideNumber = 0;
const slides = document.getElementsByClassName("slider-image__image");
const slidesCount = slides.length;

let textNumber = 0;
const texts = document.getElementsByClassName("slider-text");
const textsCount = texts.length;

document
  .querySelector(".slider-image__buttons--prev")
  .addEventListener("click", () => {
    moveToPrevSlide();
  });
document
  .querySelector(".slider-image__buttons--next")
  .addEventListener("click", () => {
    moveToNextSlide();
  });

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      moveToPrevSlide();
      break;
    case "ArrowRight":
      moveToNextSlide();

      break;
  }
});

function moveToPrevSlide() {
  if (slideNumber == 0) {
    slideNumber = slidesCount - 1;
  } else {
    slideNumber--;
  }
  if (textNumber == 0) {
    textNumber = textsCount - 1;
  } else {
    textNumber--;
  }
  updateSlideNumber();
}

function moveToNextSlide() {
  if (slideNumber == slidesCount - 1) {
    slideNumber = 0;
  } else {
    slideNumber++;
  }
  if (textNumber == textsCount - 1) {
    textNumber = 0;
  } else {
    textNumber++;
  }
  updateSlideNumber();
}

function updateSlideNumber() {
  for (let slide of slides) {
    slide.classList.add("slider-image__image--hidden");
    slide.classList.remove("slider-image__image--visible");
  }
  slides[slideNumber].classList.add("slider-image__image--visible");
  slides[slideNumber].classList.remove("slider-image__image--hidden");

  for (let text of texts) {
    text.classList.add("slider-text--hidden");
    text.classList.remove("slider-text--visible");
  }
  texts[textNumber].classList.add("slider-text--visible");
  texts[textNumber].classList.remove("slider-text--hidden");
}
