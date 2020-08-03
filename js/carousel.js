"use-strict"

const imgCarousel = document.getElementById("carousel-img")
const btnPrev = document.getElementById("carousel-prev")
const btnNext = document.getElementById("carousel-next")

let indexImage = 0
const carouselImages = [
    "img/carousel/img1.jpg",
    "img/carousel/img2.jpg",
    "img/carousel/img3.jpg",
    "img/carousel/img4.jpg",
]


const setImage = () => {
    imgCarousel.setAttribute("src", carouselImages[indexImage])
    updateSymbol()
    resetTimer()
}

const goNextImage = () => {
    indexImage = ++indexImage === carouselImages.length ? 0 : indexImage
    setImage()
}

const goPrevImage = () => {
    indexImage = --indexImage === -1 ? (carouselImages.length-1) : indexImage
    setImage()
}

const setCarouselImage = e => {
    indexImage = e.target.dataset.image
    setImage()
}

const resetTimer = () => {
    clearTimeout(timer || "")
    timer = setTimeout(goNextImage, 3000)
}

const updateSymbol = () => {
    document.getElementById("selectedImage").removeAttribute('id')
    document.querySelectorAll(`[data-image="${indexImage}"]`)[0].setAttribute("id", "selectedImage")
}

let timer = setTimeout(goNextImage, 3000)