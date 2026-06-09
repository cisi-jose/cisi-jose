// Smooth scrolling navigation framework
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update Active Nav Links dynamically
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        this.classList.add('active');
    });
});

// NEW: Dynamic Category Filtering Logic for Projects section
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active visual class on buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedFilter = button.getAttribute('data-filter');

        // Show/Hide project grid cards with clean styling switches
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (selectedFilter === 'all' || cardCategory === selectedFilter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Clean Contact Form submit fallback handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('¡Gracias por su mensaje! Nos comunicaremos con usted a la brevedad.');
        contactForm.reset();
    });
}
