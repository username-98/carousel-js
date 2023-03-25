const slides = document.getElementsByClassName("carousel-item")
const totalSlides = slides.length
const btnPrev = document.getElementById("carousel-btn-prev")
const btnNext = document.getElementById("carousel-btn-next")
const indicator = document.getElementById("carousel-indicator")
let slidePos = 0
indicator.innerText = slidePos + 1

btnPrev.addEventListener("click",moveToPrevSlide)

btnNext.addEventListener("click",moveToNextSlide)

function hideAllSlide() {
    for (const slide of slides){
        slides[slidePos].classList.remove("carousel-item-visible")
    }
}


function moveToNextSlide() {
    hideAllSlide()
    if (slidePos === totalSlides -1) {
        slidePos = 0
    }else {
        slidePos++
    }  
    slides[slidePos].classList.add("carousel-item-visible")
    indicator.innerText = slidePos +1

}


function moveToPrevSlide() {
    hideAllSlide()
    if (slidePos === 0) {
        slidePos = totalSlides -1
    }else {
        slidePos--
    }  
    slides[slidePos].classList.add("carousel-item-visible")
    indicator.innerText = slidePos +1
}


