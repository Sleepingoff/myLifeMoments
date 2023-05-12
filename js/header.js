const header = document.querySelector("header");
console.log(header);
const headerUp = "up";
const headerDown = "down";

let startScrollValue = document.documentElement.scrollTop;
function upHeader(){
    header.classList.remove(headerDown);
    header.classList.add(headerUp);
}
function downHeader(){
    header.classList.remove(headerUp);
    header.classList.add(headerDown);
}
function removeAll(){
    header.classList.remove(headerUp);
    header.classList.remove(headerDown);
}
function scrollHeader() {
    let currentScrollValue = document.documentElement.scrollTop;
    let scrollValue = startScrollValue - currentScrollValue;
    /*if (scrollValue > 0) {
        upHeader();
    }
    if (scrollValue < 0) {
        downHeader();
    }
    if (currentScrollValue === 0){
        removeAll();
    }*/
    currentScrollValue === 0 ? removeAll() : (scrollValue < 0 ? downHeader() : upHeader());
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