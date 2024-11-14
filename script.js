document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('toggle');
        navLinks.classList.toggle('active');
    });
});


let slideIndex = 0; // Starting index for the slider

// Function to move the slide
function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += direction;

    // Loop the slides around (go to the first slide when reaching the end)
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Move the slides container to show the current slide
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Automatic Slide Transition (Optional)
setInterval(() => {
    moveSlide(1);
}, 5000); // Change slide every 5 seconds
    