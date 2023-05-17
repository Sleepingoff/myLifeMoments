window.onload = () => {
  const modal = document.querySelector("#modal");
  const login = document.getElementById("login");
  const loginbtn = document.querySelector("button.close");
  const loginmodal = document.querySelector("#loginmodal");

  login.addEventListener("click", function () {
    modal.classList.remove("hide");
    loginmodal.classList.add("popup");

    loginbtn.addEventListener("click", function(){
      modal.classList.add("hide");
      loginmodal.classList.remove("popup");
    })
  });
};
