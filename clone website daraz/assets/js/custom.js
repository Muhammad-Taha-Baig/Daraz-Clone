// Sticky Navbar

const header = document.querySelector("header");
const topSection = document.querySelector(".top-section")
const searchBar = document.querySelector(".search-bar");
const categories = document.querySelector(".categories");
const heroSection = document.querySelector(".hero-section");

window.addEventListener("scroll", () => {
    header.classList.toggle("active", window.pageYOffset > 70);
    topSection.classList.toggle("active", window.pageYOffset > 500);
    categories.classList.toggle("active", window.pageYOffset > 500);
    searchBar.classList.toggle("active", window.pageYOffset > 500);
    heroSection.classList.toggle("active", window.pageYOffset > 70);
})

// Hero Slider

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const pagination = document.querySelectorAll(".pagination");
console.log(pagination)

let counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

nextBtn.addEventListener('click', () => {
    counter = (counter == slides.length - 1) ? 0 : counter + 1;
    slideImage();
})

prevBtn.addEventListener('click', () => {
    counter = (counter == 0) ? slides.length - 1 : counter - 1;
    slideImage();
})

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

setInterval(
    () => {
        counter = (counter == slides.length - 1) ? 0 : counter + 1;
        slideImage();
    },
    3000
)


