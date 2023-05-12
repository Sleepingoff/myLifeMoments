window.onload = function(){
    const header = document.querySelector("header");
    console.log(header);
    const headerUp = "up";
    const headerDown = "down";
    let startScrollValue = document.documentElement.scrollTop;
    header.addEventListener("scroll", function(){
        let currentScrollValue = document.documentElement.scrollTop;
        let scrollValue = startScrollValue - currentScrollValue;
        if(scrollValue > 0){
            header.classList.add(headerUp);
        }
        if(scrollValue < 0){
            header.classList.add(headerDown);
        }
        startScrollValue = currentScrollValue;
    })
    alert('ready');
}