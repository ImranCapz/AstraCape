document.addEventListener('DOMContentLoaded', function () {
    // Get all radio buttons and slides
    var radioButtons = document.querySelectorAll('input[type="radio"][name="radio-btn"]');
    var slides = document.querySelectorAll('.slide-container');

    // Initialize variables
    var currentSlide = 0;
    var totalSlides = slides.length;

    // Function to show the next slide
    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        radioButtons[currentSlide].checked = false;

        currentSlide = (currentSlide + 1) % totalSlides;

        slides[currentSlide].classList.add('active');
        radioButtons[currentSlide].checked = true;
    }

    // Set interval for automatic slide change (adjust the time in milliseconds)
    var intervalId = setInterval(showNextSlide, 6000); // Change slide every 5 seconds

    // Stop the interval when the user interacts with the slider
    document.querySelector('.slides').addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });

    document.querySelector('.slides').addEventListener('mouseleave', function () {
        intervalId = setInterval(showNextSlide, 6000);
    });
});