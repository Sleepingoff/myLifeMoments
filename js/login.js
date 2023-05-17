window.addEventListener("DOMContentLoaded", function () {
  const login = document.querySelector("header #login");
  const loginmodal = document.querySelector("header #loginmodal");

  login.addEventListener("click", function () {
    loginmodal.classList.add("popup");
    loginmodal.classList.remove("hide");
  });
});
