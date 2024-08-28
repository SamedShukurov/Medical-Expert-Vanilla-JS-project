const faqs = document.querySelectorAll(".faq-content-questions .accordion");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
        const icon = faq.firstElementChild.lastElementChild;
        if (faq.classList.contains("active")) {
            icon.classList.replace("fa-plus", "fa-minus");
        } else {
            icon.classList.replace("fa-minus", "fa-plus");
        }
    });
});

// swiper
AOS.init();
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
    },
});

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

/**
 

    <div>
        <i class="fa-solid fa-bars"></i>
        <a class="header-profile">
            <img src="src/assets/svg/Eli pp.svg" alt="pp">
            <span>Əli</span>
        </a>
    </div>
 */

/*
    <div>
        <i class="fa-solid fa-bars"></i>
        <a href="login.html" class="header_navbar_login_btn">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_73_2174)">
                    <path d="M7.5 22L5.5 22C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19L2.5 5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2L7.5 2C7.76522 2 8.01957 1.89464 8.20711 1.70711C8.39464 1.51957 8.5 1.26522 8.5 1C8.5 0.734784 8.39464 0.48043 8.20711 0.292893C8.01957 0.105357 7.76522 2.43254e-07 7.5 2.34374e-07L5.5 1.6741e-07C4.17441 0.00158798 2.90356 0.528882 1.96622 1.46622C1.02888 2.40356 0.501588 3.67441 0.5 5L0.499999 19C0.501587 20.3256 1.02888 21.5964 1.96622 22.5338C2.90356 23.4711 4.1744 23.9984 5.5 24L7.5 24C7.76522 24 8.01957 23.8946 8.20711 23.7071C8.39464 23.5196 8.5 23.2652 8.5 23C8.5 22.7348 8.39464 22.4804 8.20711 22.2929C8.01957 22.1054 7.76522 22 7.5 22Z" fill="#1D1D1F"></path>
                    <path d="M23.5001 11L7.72306 11.032C7.81077 10.8691 7.92046 10.719 8.04906 10.586L11.9281 6.70702C12.0236 6.61477 12.0998 6.50443 12.1522 6.38242C12.2046 6.26042 12.2322 6.1292 12.2333 5.99642C12.2345 5.86364 12.2092 5.73196 12.1589 5.60907C12.1086 5.48617 12.0343 5.37452 11.9405 5.28063C11.8466 5.18673 11.7349 5.11248 11.612 5.0622C11.4891 5.01192 11.3574 4.98662 11.2247 4.98777C11.0919 4.98892 10.9607 5.01651 10.8387 5.06892C10.7167 5.12133 10.6063 5.19751 10.5141 5.29302L6.63306 9.17202C5.88318 9.92213 5.46191 10.9394 5.46191 12C5.46191 13.0607 5.88318 14.0779 6.63306 14.828L10.5121 18.707C10.6043 18.8025 10.7147 18.8787 10.8367 18.9311C10.9587 18.9835 11.0899 19.0111 11.2227 19.0123C11.3554 19.0134 11.4871 18.9881 11.61 18.9378C11.7329 18.8876 11.8446 18.8133 11.9385 18.7194C12.0323 18.6255 12.1066 18.5139 12.1569 18.391C12.2072 18.2681 12.2325 18.1364 12.2313 18.0036C12.2302 17.8708 12.2026 17.7396 12.1502 17.6176C12.0978 17.4956 12.0216 17.3853 11.9261 17.293L8.04706 13.414C7.93514 13.2988 7.83745 13.1705 7.75606 13.032L23.5001 13C23.7653 13 24.0196 12.8947 24.2072 12.7071C24.3947 12.5196 24.5001 12.2652 24.5001 12C24.5001 11.7348 24.3947 11.4805 24.2072 11.2929C24.0196 11.1054 23.7653 11 23.5001 11Z" fill="#1D1D1F"></path>
                </g>
                <defs>
                    <clipPath id="clip0_73_2174">
                        <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                    </clipPath>
                </defs>
            </svg>
            <span>Daxil ol</span>
        </a>
    </div>

*/