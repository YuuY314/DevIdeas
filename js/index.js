const scrollTopBtn = document.querySelector("#scroll_top");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        scrollTopBtn.classList.remove("hidden");
    } else {
        scrollTopBtn.classList.add("hidden");
    }
});

const carousel = document.querySelector(".carousel_images");
const images = document.querySelectorAll(".carousel_images img");
const next = document.querySelector(".carousel_buttons.right");
const prev = document.querySelector(".carousel_buttons.left");  

let index = 0;
const visible = 5;

function updateCarousel() {
    const move = 100 / 5;
    carousel.style.transform = `translateX(-${index * move}%)`;
}

next.addEventListener("click", () => {
    if(index < images.length - visible){
        index++;
    } else {
        index = 0;
    }
    updateCarousel();
});

prev.addEventListener("click", () => {
    if(index > 0){
        index--;
    } else {
        index = images.length - visible;
    }
    updateCarousel();
});