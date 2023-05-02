const toDoList = document.querySelector("#todo-list");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
//saving todo
const toDos = [];
const  DOTO_KEY = "toDos";
function saveToDos(){
    //Array -> string
    localStorage.setItem(DOTO_KEY, JSON.stringify(toDos));
}
//할 일 추가하기
function paintToDo(newToDo){
    //elements in list
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delbtn = document.createElement("button");
    delbtn.addEventListener("click", deleteList);
    li.appendChild(span);
    li.appendChild(delbtn);
    toDoList.appendChild(li);
    span.innerText = newToDo;
    delbtn.innerText = "x";
}
//할 일 입력받기
function handleToDoSubmit(event){
    event.preventDefault();
    const toDoValue = toDoInput.value;
    toDoInput.value = "";
    toDos.push(toDoValue);
    paintToDo(toDoValue);
    saveToDos();
}
//할 일 삭제하기
function deleteList(event){
    const target = event.target.parentElement;
    target.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(DOTO_KEY);
if(savedToDos){
    //string to Object in this case, Array
    const parsedToDos = JSON.parse(savedToDos);
    //show the array
    parsedToDos.forEach((e) => paintToDo(e));
}