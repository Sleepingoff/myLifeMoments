const carouselBox = document.querySelector(".carousel");
const carousel = carouselBox.querySelector("ul");
const carouselElem = carousel.querySelectorAll("li");
const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");
prevBtn.classList.add("prev");
nextBtn.classList.add("next");
carouselBox.prepend(prevBtn);
carouselBox.append(nextBtn);
const size = carouselElem[0].clientWidth;

let count = 0;

prevBtn.addEventListener("click", () => {
  if (count >= carouselElem.length - 1) count = 0;
  if (count === 0) return;
  count++;
  carousel.style.transform = "translateX(" + size * count + "px)";
});
nextBtn.addEventListener("click", () => {
  if (count <= -carouselElem.length + 3) count = 1;
  count--;
  carousel.style.transform = "translateX(" + size * count + "px)";
});
