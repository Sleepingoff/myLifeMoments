window.onload = () => {
  const login = document.getElementById("login");
  const loginmodal = document.querySelector("header #loginmodal");

  login.addEventListener("click", function () {
    loginmodal.classList.add("popup");
    loginmodal.classList.remove("hide");
  });
};
