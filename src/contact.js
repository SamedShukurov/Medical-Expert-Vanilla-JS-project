const burgerMenu = document.querySelector(".fa-bars")
const burgerMenuCloseBtn = document.querySelector(".fa-circle-xmark")
const navigationMenu=document.querySelector(".header_navbar_menu")
burgerMenu.addEventListener("click",()=>{
    if(!navigationMenu.classList.contains("active")){
        
        navigationMenu.classList.add("active")
        burgerMenu.style.display="none"
    }
})
burgerMenuCloseBtn.addEventListener("click",()=>{
    if(navigationMenu.classList.contains("active")){
        navigationMenu.classList.remove("active")
        burgerMenu.style.display="block"
    }
})