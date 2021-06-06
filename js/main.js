const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // get element with current class
  const current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    // add current class to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // add current class to start
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // get element with current class
  const current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.previousElementSibling) {
    // add current class to next sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // add current class to last
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

// button events
next.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// auto slide
if (auto) {
  // run nextslide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
