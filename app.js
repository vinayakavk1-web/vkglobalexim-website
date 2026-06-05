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

    // Initialize VanillaTilt for 3D card effect
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".service-card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.05
        });
    }

    // Initialize Particles.js for 3D Network Effect
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": ["#f59e0b", "#10b981"] }, // Mango Gold and Emerald Green
                "shape": { "type": "circle" },
                "opacity": { "value": 0.6, "random": true },
                "size": { "value": 4, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#10b981", // Emerald Green lines
                    "opacity": 0.3,
                    "width": 1.5
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 200, "line_linked": { "opacity": 1 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }
});

// Modal Functions
function openProductModal() {
    document.getElementById('product-modal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    var modal = document.getElementById('product-modal');
    if (event.target == modal) {
        closeProductModal();
    }
}
