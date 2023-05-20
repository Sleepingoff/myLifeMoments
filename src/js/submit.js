const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDE_CLASSNAME = "hide";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDE_CLASSNAME);
    const username = loginInput.value;
    // console.log(loginInput.value);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
//중복되는 부분 함수로 처리하기
function paintGreetings(username){
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDE_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
//submit할 때 username에 데이터를 담아와서 화면에 표시해주기
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //show form
    loginForm.classList.remove(HIDE_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    loginForm.classList.add(HIDE_CLASSNAME);
    paintGreetings(savedUsername);
}

