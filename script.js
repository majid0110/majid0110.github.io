// ===========================
// FUTURISTIC PORTFOLIO SITE
// Interactive JavaScript Module
// ===========================

// ===== DOM ELEMENTS =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// ===== HAMBURGER MENU TOGGLE =====
/**
 * Toggle mobile navigation menu
 * Adds/removes 'active' class for animation
 */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

/**
 * Close mobile menu when a nav link is clicked
 * Improves UX for mobile users
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== SCROLL REVEAL ANIMATION =====
/**
 * Intersection Observer for scroll-triggered animations
 * Elements fade in and slide up as they come into view
 */
const revealElements = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all cards and content for scroll reveal
    const elements = document.querySelectorAll(
        '.research-card, .project-card, .publication-card, .experience-card, .skill-group, .about-text'
    );

    elements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
};

// ===== SMOOTH SCROLL BEHAVIOR =====
/**
 * Native smooth scrolling for anchor links
 * Provides better UX without additional libraries
 */
document.documentElement.style.scrollBehavior = 'smooth';

// ===== NAVBAR SCROLL EFFECT =====
/**
 * Add subtle styling to navbar when scrolling
 * Enhances visual feedback for user
 */
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;

    if (lastScrollY > 50) {
        navbar.style.boxShadow = '0 8px 32px rgba(0, 217, 255, 0.15)';
    } else {
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    }
});

// ===== CONTACT FORM HANDLING =====
/**
 * Handle contact form submission
 * Note: This is frontend only - integrate with backend for production
 * Common options: Formspree, EmailJS, or custom backend API
 */
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Simulate sending (in production, send to backend/service)
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Simulate API call with timeout
    setTimeout(() => {
        // Success message
        showNotification('Message sent successfully! I will get back to you soon.', 'success');

        // Reset form
        contactForm.reset();

        // Restore button
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // Log form data (in production, this goes to backend)
        console.log({
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });
    }, 1500);
});

/**
 * Display notification messages
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error'
 */
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        backgroundColor: type === 'success' ? 'rgba(0, 217, 255, 0.9)' : 'rgba(255, 0, 110, 0.9)',
        color: '#000',
        fontWeight: '600',
        zIndex: '1000',
        animation: 'slideIn 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word',
        fontSize: '14px'
    });

    document.body.appendChild(notification);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Auto-remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ===== ACTIVE NAV LINK TRACKING =====
/**
 * Highlight active nav link based on scroll position
 * Updates as user scrolls through different sections
 */
const updateActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (lastScrollY >= sectionTop && lastScrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
};

window.addEventListener('scroll', updateActiveNavLink);

// ===== PARALLAX EFFECT FOR BACKGROUND ORBS =====
/**
 * Create subtle parallax effect for background gradient orbs
 * Enhances depth perception as user scrolls
 */
const parallaxEffect = () => {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1); // Different speed for each orb
        orb.style.transform = `translateY(${lastScrollY * speed}px)`;
    });
};

window.addEventListener('scroll', parallaxEffect);

// ===== TYPEWRITER EFFECT FOR HERO TITLE =====
/**
 * Subtle character-by-character reveal for hero title
 * Creates engaging visual effect on page load
 */
const typewriterEffect = () => {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;

    const originalText = titleElement.textContent;
    titleElement.textContent = '';
    let index = 0;

    const type = () => {
        if (index < originalText.length) {
            titleElement.textContent += originalText.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    };

    // Start after a short delay
    setTimeout(type, 300);
};

// ===== INTERACTIVE SKILL ITEMS =====
/**
 * Add interactive hover effects to skill items
 * Each skill item shows animated border on hover
 */
const enhanceSkillItems = () => {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.4)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    });
};

// ===== COUNTER ANIMATION FOR STATS =====
/**
 * Animate counter numbers when they come into view
 * Used for displaying metrics and statistics
 * @param {Element} element - The counter element
 * @param {number} target - The target number
 * @param {number} duration - Animation duration in ms
 */
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    const step = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(step);
        } else {
            element.textContent = target;
        }
    };
    step();
};

// ===== PAGE LOAD ANIMATIONS =====
/**
 * Initialize all animations on page load
 * Ensures smooth experience when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Start scroll reveal
    revealElements();

    // Apply typewriter effect
    typewriterEffect();

    // Enhance skill items
    enhanceSkillItems();

    // Add animations to project and research cards
    addCardAnimations();

    // Log page load (for analytics if needed)
    console.log('Portfolio page loaded successfully');
});

// ===== CARD ANIMATION HANDLER =====
/**
 * Add advanced hover animations to all cards
 * Creates dynamic visual feedback
 */
const addCardAnimations = () => {
    const cards = document.querySelectorAll('.research-card, .project-card, .experience-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Create ripple effect on hover
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, rgba(0, 217, 255, 0.5), transparent);
                border-radius: 50%;
                pointer-events: none;
                animation: rippleAnimation 0.6s ease-out;
            `;
            
            // Position ripple at mouse position
            card.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleAnimation {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
};

// ===== KEYBOARD NAVIGATION =====
/**
 * Allow keyboard navigation with Tab key
 * Enhances accessibility
 */
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== MOBILE GESTURE SUPPORT =====
/**
 * Detect swipe gestures on mobile devices
 * Close menu on swipe left
 */
let touchStartX = 0;
document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX > touchEndX + 50) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== ACCESSIBILITY: FOCUS STYLES =====
/**
 * Enhance keyboard navigation focus styles
 * Important for accessibility compliance
 */
const style = document.createElement('style');
style.textContent = `
    .nav-link:focus-visible,
    .cta-button:focus-visible,
    a:focus-visible,
    button:focus-visible,
    input:focus-visible,
    textarea:focus-visible {
        outline: 2px solid var(--accent-cyan);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// ===== PRELOAD ANIMATIONS =====
/**
 * Prevent FOUC (Flash of Unstyled Content)
 * Set initial states before animations begin
 */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
});

// ===== INTERSECTION OBSERVER FOR LAZY ANIMATIONS =====
/**
 * Advanced intersection observer for element-specific animations
 * Trigger animations only when elements are visible
 */
const initializeIntersectionObserver = () => {
    const observerOptions = {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-100px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
};

// ===== UTILITY: COPY TEXT TO CLIPBOARD =====
/**
 * Add copy-to-clipboard functionality for email and links
 */
const addCopyFunctionality = () => {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            const email = this.href.replace('mailto:', '');
            
            // Copy to clipboard
            navigator.clipboard.writeText(email).then(() => {
                showNotification('Email copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Failed to copy email', 'error');
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', addCopyFunctionality);

// ===== PERFORMANCE: LAZY LOAD IMAGES =====
/**
 * Implement lazy loading for images if needed
 * Improves initial page load performance
 */
const lazyLoadImages = () => {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-lazy]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.lazy;
                    img.removeAttribute('data-lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
};

// ===== DEBUG MODE =====
/**
 * Enable debug mode by typing 'DEBUG' in console
 * Shows useful information about page state
 */
window.DEBUG_MODE = false;
window.showDebugInfo = () => {
    console.log('=== DEBUG INFO ===');
    console.log('Current scroll Y:', lastScrollY);
    console.log('Active nav links:', document.querySelectorAll('.nav-link.active'));
    console.log('Visible sections:', Array.from(document.querySelectorAll('section')).map(s => ({
        id: s.id,
        visible: s.getBoundingClientRect().top < window.innerHeight
    })));
};

// ===== INITIALIZATION =====
/**
 * Run all initialization functions on DOM ready
 */
const initializeApp = () => {
    console.log('Initializing portfolio application...');
    
    // Update active nav link on initial load
    updateActiveNavLink();
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Initialize intersection observer
    initializeIntersectionObserver();
    
    console.log('Portfolio application initialized successfully');
};

document.addEventListener('DOMContentLoaded', initializeApp);

// ===== EXPORT FOR TESTING =====
/**
 * Export functions for testing (optional)
 * Useful for automated testing frameworks
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showNotification,
        updateActiveNavLink,
        animateCounter,
        typewriterEffect
    };
}

// ===== AUTO-CLOSE MOBILE MENU ON RESIZE =====
/**
 * Close mobile menu when window is resized to desktop size
 */
let lastWindowWidth = window.innerWidth;
window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    if (lastWindowWidth <= 768 && currentWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    lastWindowWidth = currentWidth;
});

// ===== PERFORMANCE MONITORING =====
/**
 * Optional: Monitor page performance
 * Remove in production if not needed
 */
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        }, 0);
    });
}
