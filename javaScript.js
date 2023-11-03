const carouselContainers = document.querySelectorAll('.carousel-container');

carouselContainers.forEach(carouselContainer => {
    const slides = carouselContainer.querySelector('.carousel-slides');
    const slideWidth = carouselContainer.offsetWidth;
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.children.length;
        const translateX = -currentIndex * slideWidth;
        slides.style.transform = `translateX(${translateX}px)`;
    }

    setInterval(nextSlide, 3000);
});