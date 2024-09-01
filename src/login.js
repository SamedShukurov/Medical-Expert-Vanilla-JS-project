const checkBox = document.querySelector(".form-group-pass-change_checkbox");
const eyeBtn = document.querySelector(".fa-eye-slash");
const inputBox = document.querySelector(".form-group_input-box > input");
checkBox.addEventListener("click", () => {
    checkBox.classList.toggle("active");
});
eyeBtn.addEventListener("click", () => {
    if (eyeBtn.classList.contains("fa-eye-slash")) {
        inputBox.type = "text";
        eyeBtn.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        inputBox.type = "password";
        eyeBtn.classList.replace("fa-eye", "fa-eye-slash");
    }
});
function checkUser(){
    localStorage.setItem("isLogged","true")
}
