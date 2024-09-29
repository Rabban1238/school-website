let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Loop back to the last slide
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlideIndex) ? "block" : "none";
    });

    dots.forEach((dot, i) => {
        dot.className = (i === currentSlideIndex) ? "dot active-dot" : "dot";
    });
}

function changeSlide(step) {
    showSlide(currentSlideIndex + step);
}

function currentSlide(index) {
    showSlide(index);
}

// Initially show the first slide
showSlide(currentSlideIndex);
