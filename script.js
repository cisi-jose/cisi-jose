// Smooth scrolling for navigation links
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

// Button click handler
const ctaBtn = document.getElementById('cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', function () {
        alert('Welcome! Thanks for clicking the button.');
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Page load animation
window.addEventListener('load', function () {
    console.log('Page loaded successfully!');
});