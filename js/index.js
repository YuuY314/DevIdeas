const scrollTopBtn = document.querySelector("#scroll_top");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        scrollTopBtn.classList.remove("hidden");
    } else {
        scrollTopBtn.classList.add("hidden");
    }
});