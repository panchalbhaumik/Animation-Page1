
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animate-slide-up');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only trigger once per element
            }
        });
    }, {
        threshold: 0.1 // Start animation when 10% of the element is visible
    });

    animatedElements.forEach(el => observer.observe(el));
});



function animateMilestones() {
    const counters = document.querySelectorAll('.milestone-number');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = 20; // lower is faster

        const updateCount = () => {
            const increment = target / 200; // control smoothness
            count += increment;
            if (count < target) {
                counter.textContent = Math.floor(count) + ' K+';
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target + ' K+';
            }
        };

        updateCount();
    });
}

// Trigger on load
window.addEventListener('DOMContentLoaded', animateMilestones);


//Carousel cards
const carousel = document.getElementById('cardCarousel');
const cardWidth = 300 + 16; // Card width + gap (adjust if needed)

function scrollCards(direction) {
    carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}