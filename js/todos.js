const toDo = document.querySelector("#todo");
const toDoList = document.querySelector("#todo-list");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const clear = document.querySelector("#clear");


//scroll 시에만 todolist가 나오게 하기
//처음에 모두 숨기기 -> 숨기지 않고 오른쪽으로 나오게 하기
let toDoMove = toDo.offsetLeft;
let toDoZ = toDo.style.zIndex;
console.dir(toDo);

document.addEventListener('scroll', function() {
    //현재 스크롤 위치
    let currentScrollValue = document.documentElement.scrollTop;
    //스크롤이 10 이하면 원래 위치 아니면 다른 위치
    currentScrollValue < 10 ? toDoMove = -50 : toDoMove = -100;
    toDoMove == -100 ? toDoZ = 9 : toDoZ = -1;
    //각각에 적용하기
    toDo.style.right = toDoMove + "px";
    toDo.style.zIndex = toDoZ;
});
//localStorage delete All
function clearStorage(){
    localStorage.clear();
}
clear.addEventListener("click", clearStorage);
//saving todo
let toDos = [];
let toDoObj = {};
const  DOTO_KEY = "toDos";
function saveToDos(){
    //Array -> string
    localStorage.setItem(DOTO_KEY, JSON.stringify(toDos));
}
//할 일 추가하기
function paintToDo(newToDoObj){
    //elements in list
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delbtn = document.createElement("button");
    delbtn.addEventListener("click", deleteList);
    li.id = newToDoObj.id;
    li.appendChild(span);
    li.appendChild(delbtn);
    toDoList.appendChild(li);
    span.innerText = newToDoObj.text;
    delbtn.innerText = "x";
}
//할 일 입력받기
function handleToDoSubmit(event){
    event.preventDefault();
    const toDoValue = toDoInput.value;
    toDoInput.value = "";
    //toDo를 array가 아닌 obj의 text로 추가하며, 개별로 아이디를 만들어 구별이 가능하도록 하기. 아이디는 랜덤한 숫자
    toDoObj = {text: toDoValue, id: Date.now()};
    toDos.push(toDoObj);
    paintToDo(toDoObj);
    saveToDos();
}
//할 일 삭제하기
//먼저 버튼 클릭시 obj의 아이디를 가져오도록 다시 설정해야함
function deleteList(event){
    const target = event.target.parentElement;
    const targetId = target.id;
    target.remove();
    //targetId와 obj의 id가 일치하면 해당 아이템만 "제외시키기"
    //targetId의 type은 string이다!! 타입이 일치하지 않아서 제대로 동작하지 않았던 것
    toDos = toDos.filter((toDoObj) => toDoObj.id !== parseInt(targetId));
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(DOTO_KEY);
if(savedToDos){
    //string to Object in this case, Array
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //show the array
    parsedToDos.forEach(paintToDo);
}