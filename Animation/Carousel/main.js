const getPrevBtn = document.getElementById("prevBtn")
const getNextBtn = document.getElementById("nextBtn")
let indexLayar = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const carousel = document.getElementById('carousel');

function showSlide(index) {
    if (index < 0) {
        indexLayar = totalItems - 1;
    } else if (index >= totalItems) {
        indexLayar = 0;
    } else {
        indexLayar = index;
    }

    const newTransformValue = -indexLayar * 100 + '%';
    let data = `data${newTransformValue}`
    console.log(data)
    carousel.style.transform = `translateX(${newTransformValue})`
}
getNextBtn.addEventListener("click", function () {
    showSlide(indexLayar + 1);
})
getPrevBtn.addEventListener("click", function () {
    showSlide(indexLayar - 1);
})
