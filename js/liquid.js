const div = document.querySelectorAll("div.p18");
//typeof div = object
//유사배열에서 배열 메서드 사용하는 방법
//Array.from(div).map((text) => console.log(text));
//유사배열을 배열로 바꾸는 방법
/*let arr = Array.from(div);
arr.forEach((value, key) => {
  console.log(`${value} : ${key}`);
});*/

let divWidth =div.forEach((elem) => elem.offsetWidth);
let divHeight =div.forEach((elem) => elem.offsetHeight);
console.log(divHeight);
