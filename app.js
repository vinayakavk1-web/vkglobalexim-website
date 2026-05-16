// GSAP UI Animations
document.addEventListener("DOMContentLoaded", (event) => {
    // Navbar animations
    gsap.from(".logo", { opacity: 0, y: -20, duration: 1, delay: 0.2 });
    gsap.from(".nav-links li", { opacity: 0, y: -20, duration: 1, delay: 0.3, stagger: 0.1 });
    gsap.from(".cta-btn", { opacity: 0, scale: 0.8, duration: 1, delay: 0.7 });
    
    // Hero content animations
    gsap.from(".hero-title", { opacity: 0, x: -50, duration: 1, delay: 0.8 });
    gsap.from(".hero-subtitle", { opacity: 0, x: -50, duration: 1, delay: 1.0 });
    gsap.from(".hero-buttons", { opacity: 0, y: 30, duration: 1, delay: 1.2 });
    
    // Services animations on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.fromTo(entry.target, 
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
                );
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    serviceCards.forEach(card => {
        // Initial setup for cards to be hidden before scroll
        card.style.opacity = '0';
        observer.observe(card);
    });
});
