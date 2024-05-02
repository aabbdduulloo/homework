function submit() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  console.log(username.value);
  console.log(password.value);
}

const isShow = () => {
  let password = document.getElementById("password");
  let eyeIcon = document.getElementById("eye-icon");

  if (password.type === "password") {
    password.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
};
