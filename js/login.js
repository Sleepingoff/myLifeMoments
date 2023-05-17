const login = document.querySelector("li#login");
const loginmodal = document.querySelector("#loginmodal");

login.addEventListener("click", function () {
  loginmodal.classList.add("popup");
  loginmodal.classList.remove("hide");
});
