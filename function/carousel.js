document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelectorAll("img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;
    let interval;

    // Set initial width of carousel container
    carousel.style.width = `${images.length * 100}%`;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * (100 / images.length)}%)`;
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    }

    function startAutoSlide() {
        stopAutoSlide(); // Clear any existing interval first
        interval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        if (interval) {
            clearInterval(interval);
        }
    }

    // Event Listeners
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
        
        nextBtn.addEventListener("click", () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }

    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);

    // Initialize carousel
    updateCarousel();
    startAutoSlide();
});