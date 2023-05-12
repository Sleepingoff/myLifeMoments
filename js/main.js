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
let options = {
  threshold: 1.0
}
let observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.intersectionRatio > 0.5){
		//뷰포트에 대상이 들어왔다면
			entry.target.classList.add('fadeUp');
		}
		else{
			entry.target.classList.remove('fadeUp');
		}
	});
}, options);

p14.forEach(elem => observer.observe(elem));

const p18 = document.querySelectorAll(".p18");
const h2 = document.querySelectorAll("h2.insideBox");
// mouseenter시 random color

p18.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        elem.style.backgroundColor = colorCode;
    });
    elem.addEventListener('mouseleave', function(){
        elem.style.backgroundColor = "white";
    });
});

h2.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        elem.style.backgroundColor = colorCode;
    });
    elem.addEventListener('mouseleave', function(){
        elem.style.backgroundColor = "white";
    });
});