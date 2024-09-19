
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

let usersDbUrl= 'http://localhost:3000/users'
let doctorsDbUrl= 'http://localhost:3000/doctors'
let finInput = document.querySelector("#FIN-input")
let passInput = document.querySelector(".form-group_input-box")

document.querySelector(".main-container").addEventListener('submit',(e)=>{
    e.preventDefault()
})  
document.querySelector(".btn_primary").addEventListener("click",(e)=>{
    e.preventDefault()
    fetch(usersDbUrl).then(res => res.json()).then(data => {
        console.log(data)
    })
})


function checkUser(){
    if(checkBox.classList.contains("active") == true){
        localStorage.setItem("stayLogged","true")
    }
}
