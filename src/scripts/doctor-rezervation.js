// Burger menu
const burgerMenu = document.querySelector(".fa-bars");
const burgerMenuCloseBtn = document.querySelector(".fa-circle-xmark");
const navigationMenu = document.querySelector(".header_navbar_menu");
burgerMenu.addEventListener("click", () => {
    if (!navigationMenu.classList.contains("active")) {
        navigationMenu.classList.add("active");
        burgerMenu.style.display = "none";
    }
});
burgerMenuCloseBtn.addEventListener("click", () => {
    if (navigationMenu.classList.contains("active")) {
        navigationMenu.classList.remove("active");
        burgerMenu.style.display = "block";
    }
});
//! star assessment (comments)
const starClassActive = "fa-solid fa-star-sharp";
const starClassInactive = "fa-light fa-star-sharp";
const assessmentStars = document.querySelector(".assessment-stars");
const ratingStars = [
    ...assessmentStars.getElementsByClassName("fa-star-sharp"),
];
const starsLength = ratingStars.length;
ratingStars.forEach((star) => {
    star.addEventListener("click", () => {
        let i = ratingStars.indexOf(star);
        if (star.className === starClassInactive) {
            for (i; i >= 0; --i) {
                ratingStars[i].className = starClassActive;
            }
        } else {
            for (i; i < starsLength; ++i) {
                ratingStars[i].className = starClassInactive;
            }
        }
    });
});
//! star assessment ( custom )
let numOfActiveStarsCustom = 4; //! For Backend
let customStars = document.querySelector(".assessment-stars-info")
let arrayOfStarsCustom = [...customStars.getElementsByClassName("fa-star-sharp")]
for(let i=0;i<numOfActiveStarsCustom;i++){
    console.log(i,arrayOfStarsCustom[i])
    arrayOfStarsCustom[i].classList.replace("fa-light","fa-solid")
}
