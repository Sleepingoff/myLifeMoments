const login = document.querySelector("#login");
const modal = document.querySelector("#modal");
const loginmodal = modal.querySelector("#loginmodal");
const loginbtn = loginmodal.querySelector("button.close");
const gosignup = loginmodal.querySelector("a");

login.addEventListener("click", function () {
  loginmodal.classList.remove("hide");
  loginmodal.classList.add("popup");

  loginbtn.addEventListener("click", function () {
    loginmodal.classList.add("hide");
    loginmodal.classList.remove("popup");
  });
});
const button = loginmodal.querySelector("button.login");

button.addEventListener("click", function () {
  document.location.href = "personal.html";
});

const signmodal = modal.querySelector("#signmodal");
const signbtn = signmodal.querySelector("#signmodal button.close");
const sign = signmodal.querySelector("#sign");

gosignup.addEventListener("click", function () {
  signmodal.classList.remove("hide");
  signmodal.classList.add("popup");

  sign.addEventListener("click", (event) => {
    event.preventDefault();
    if (checkPW()) {
      signmodal.classList.add("hide");
      signmodal.classList.remove("popup");
    } else{
      alert("check ID or PW");
    }
  });

  signbtn.addEventListener("click", () => {
    signmodal.classList.add("hide");
    signmodal.classList.remove("popup");
  });
});

function checkPW() {
  console.log("hello");
  const newID = signmodal.querySelector("#newID");
  const newPW = signmodal.querySelector("#newPW");
  const newEmail = signmodal.querySelector("#newEmail");
  let id = newID.value;
  let pw = newPW.value;
  let email = newEmail.value;
  console.log(id, pw, email);
  if (id.length < 4 || id.length > 15) {
    alert("ID는 4자 이상, 15자 이하로 작성해주세요");
    id = "";
    return false;
  }
   else if (pw.length < 4 || pw.length > 15) {
    alert("비밀번호는 4자 이상, 15자 이하로 작성해주세요");
    pw = "";
    return false;
  }
  return true;
}
