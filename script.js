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

// Update Active Nav Link on click
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        this.classList.add('active');
    });
});

// Clean Contact Form handler submission override 
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Replacing browser notification alert blocks for custom sleek log console tracking
        console.log('Form submission intercepted successfully.');
        alert('¡Gracias por su mensaje! Nos comunicaremos con usted a la brevedad.');
        contactForm.reset();
    });
}
