document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        });
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const button = contactForm.querySelector('button[type="submit"]');
            
            // Add sending animation to button
            if (button) {
                button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                }
            
            // Form will submit normally since it has an action attribute
        });
    }
    
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate header height
                const headerHeight = document.querySelector('header').offsetHeight;
                
                // Scroll to element with offset for fixed header
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to nav links on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = document.querySelector('header').offsetHeight;
            
            if (window.pageYOffset >= sectionTop - headerHeight - 10) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Subtler scroll animations
        handleScrollAnimations();
    });

    // Scroll Animations for elements
    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .education-item, .certifications');
        
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('show');
            }
        });
    }

    // Initialize elements with hidden class for animations
    const elementsToAnimate = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .education-item, .certifications');
    elementsToAnimate.forEach(element => {
        element.classList.add('hidden');
    });

    // Trigger initial animation check
    setTimeout(() => {
        handleScrollAnimations();
    }, 300);

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Simple hover effect instead of 3D
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
        });
    });
    
    // Type animation for hero section - simplified
    function setupTypeAnimation() {
        const heroH2 = document.querySelector('.hero h2');
        if (!heroH2) return;
        
        // Skip the typing animation and just show the text with cursor
        heroH2.innerHTML = heroH2.textContent + '<span class="cursor">|</span>';
        
        // Start cursor blink
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            setInterval(() => {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
    }

    // Run type animation after initial load
    setTimeout(setupTypeAnimation, 500);

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}); 

// Cursor and ripple styles
const style = document.createElement('style');
style.textContent = `
    .cursor {
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    
    .ripple {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        pointer-events: none;
        width: 100px;
        height: 100px;
        transform: translate(-50%, -50%) scale(0);
        animation: ripple 0.6s linear;
        z-index: 10;
    }
    
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
    
    .btn {
        overflow: hidden;
        position: relative;
    }
    
    .fa-spinner {
        animation: spin 1s infinite linear;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Fix the show animation to be more subtle */
    .hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.8s ease;
    }
    
    .show {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style); 
