const header = document.querySelector("header");
const headerUp = "up";
const headerDown = "down";

let startScroll = document.documentElement.scrollTop;
let animation;
function upHeader() {
  header.classList.remove(headerDown);
  header.classList.add(headerUp);
}
function downHeader() {
  header.classList.remove(headerUp);
  header.classList.add(headerDown);
}
function removeAll() {
  header.classList.remove(headerUp);
  header.classList.remove(headerDown);
  clearTimeout(animation);
}
function timeUp() {
  animation = setTimeout(upHeader, 3000);
}
function scrollHeader() {
  removeAll();
  let currentScrollValue = document.documentElement.scrollTop;
  let scrollValue = startScroll - currentScrollValue;
  if (scrollValue < 0) {
    downHeader();
    timeUp();
  } else {
    upHeader();
  }
  if (currentScrollValue === 0) removeAll();
  startScroll = currentScrollValue;
}
document.addEventListener("scroll", scrollHeader);

header.addEventListener("mouseenter", function () {
  downHeader();
  clearTimeout(animation);
});
header.addEventListener("mouseleave", scrollHeader);
