const fade = document.querySelectorAll(".fade");
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

fade.forEach(elem => observer.observe(elem));

const p18 = document.querySelectorAll("main .p18");
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