const header = document.querySelector("header");
const headerUp = "up";
const headerDown = "down";

let startScrollValue = document.documentElement.scrollTop;
let animate;
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
  clearTimeout(animate);
}
function timeUp() {
  animate = setTimeout(upHeader, 3000);
}
function scrollHeader() {
  removeAll();
  let currentScrollValue = document.documentElement.scrollTop;
  let scrollValue = startScrollValue - currentScrollValue;
  if (scrollValue < 0) {
    downHeader();
    timeUp();
  } else {
    upHeader();
  }
  if (currentScrollValue === 0) removeAll();
  startScrollValue = currentScrollValue;
}
document.addEventListener("scroll", scrollHeader);

header.addEventListener("mouseenter", function () {
  downHeader();
  clearTimeout(animate);
});
header.addEventListener("mouseleave", scrollHeader);

const p14 = document.querySelectorAll(".p14");

/*function fadeUp(){
    let currentScrollValue = document.documentElement.scrollTop;
    console.log(currentScrollValue);
    if(currentScrollValue >= 100){
        p14[0].classList.add("fadeUp");
    }
    if(currentScrollValue >= 600){
        p14[1].classList.add("fadeUp");
    }
    if(currentScrollValue >= 700){
        p14[2].classList.add("fadeUp");
    }
    if(currentScrollValue >= 750){
        p14[3].classList.add("fadeUp");
    }
    if(currentScrollValue >= 1550){
        p14[4].classList.add("fadeUp");
    }
    if(currentScrollValue >= 2990){
        p14[5].classList.add("fadeUp");
    }
}*/
let observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.intersectionRatio > 0){
		//뷰포트에 대상이 들어왔다면
			entry.target.classList.add('fadeUp');
		}
		else{
			entry.target.classList('fadeUp');
		}
	});
});

p14.forEach(elem => observer.observe(elem));
