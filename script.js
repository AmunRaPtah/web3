document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelector('.carousel-indicators');

    let currentIndex = 0;
    let totalItems = items.length;

    // Create indicators
    items.forEach((item, index) => {
        const indicator = document.createElement('div');
        indicator.dataset.index = index;
        indicator.addEventListener('click', () => moveTo(index));
        indicators.appendChild(indicator);
    });

    // Auto-slide function
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        moveTo(currentIndex);
    }

    // Move to a specific slide
    function moveTo(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        updateIndicators();
    }

    // Update indicators
    function updateIndicators() {
        indicators.querySelectorAll('div').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    // Initialize
    updateIndicators();
    let autoSlideInterval = setInterval(autoSlide, 3000);

    // Pause on hover
    carousel.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
    carousel.addEventListener('mouseout', () => autoSlideInterval = setInterval(autoSlide, 3000));
});
