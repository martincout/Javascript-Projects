let rightarrow = document.querySelector("#right-arrow");
let leftarrow = document.querySelector("#left-arrow");
let slideWrapper = document.querySelector(".slideWrapper");
const arraySlides = [];
const lastIndex = slideWrapper.children.length - 1;
for (let i = 0; i < slideWrapper.children.length; i++) {
    arraySlides[i] = slideWrapper.children[i];
}
var currentIndex = 0;

const next = (e) => {
    if (currentIndex >= lastIndex) {
        return;
    }
    currentIndex += 1;
    arraySlides[currentIndex].style.transform = "translateX(0%)";
}

const prev = (e) => {
    if (currentIndex <= 0) {
        return;
    }
    arraySlides[currentIndex].style.transform = "translateX(100%)";
    currentIndex -= 1;
}