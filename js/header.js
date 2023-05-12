const header = document.querySelector("header");
const headerUp = "up";
const headerDown = "down";

let startScrollValue = document.documentElement.scrollTop;
let animate;
function upHeader(){
    header.classList.remove(headerDown);
    header.classList.add(headerUp);
}
function downHeader(){
    header.classList.remove(headerUp);
    header.classList.add(headerDown);
    timeUp();
}
function removeAll(){
    header.classList.remove(headerUp);
    header.classList.remove(headerDown);
    clearTimeout(animate);
}
function timeUp(){
    animate = setTimeout(upHeader,3000);
}
function scrollHeader() {
    removeAll();
    let currentScrollValue = document.documentElement.scrollTop;
    let scrollValue = startScrollValue - currentScrollValue;
    scrollValue < 0 ? downHeader() : upHeader();
    if(currentScrollValue === 0) removeAll();
    startScrollValue = currentScrollValue;
}
document.addEventListener("scroll", scrollHeader);

header.addEventListener("mouseenter", function(){
    if(header.classList.contains(headerUp)){
        downHeader();
    }
});
header.addEventListener("mouseleave", function(){
    if(header.classList.contains(headerUp)){
        scrollHeader();
    }
});