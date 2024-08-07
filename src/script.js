const faqs = document.querySelectorAll(".faq-content-questions .accordion");

faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active")
        const icon = faq.firstElementChild.lastElementChild
        if(faq.classList.contains("active")){
            icon.classList.replace('fa-plus','fa-minus')
        }
        else{
            icon.classList.replace('fa-minus','fa-plus')
        }
    })
})

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