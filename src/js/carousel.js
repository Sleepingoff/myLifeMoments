const carouselBox = document.querySelector(".carousel");
const carousel = carouselBox.querySelector("ul");
const carouselElem = carousel.querySelector("li");
const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");
prevBtn.classList.add("prev");
nextBtn.classList.add("next");
carouselBox.prepend(prevBtn);
carouselBox.append(nextBtn);
const size = carouselElem.clientWidth;
let counter = 1;

prevBtn.addEventListener("click", ()=>{
    carousel.style.transform = "translateX(" + -size * counter + "px)";
    counter++;
})
nextBtn.addEventListener("click", ()=>{
    carousel.style.transform = "translateX(" + size * counter + "px)";
    counter++;
})