function register() {
  localStorage.setItem("user", user.value);
  localStorage.setItem("pass", pass.value);
  msg.innerText = "Kayıt başarılı!";
}

function login() {
  if (
    loginUser.value === localStorage.getItem("user") &&
    loginPass.value === localStorage.getItem("pass")
  ) {
    window.location = "profile.html";
  } else {
    msg.innerText = "Hatalı giriş!";
  }
}
