
// Enhanced JavaScript for InfiniteSecurity website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Real-time threat counter simulation
    function simulateThreats() {
        const threatsElement = document.getElementById('threats-blocked');
        if (threatsElement) {
            let currentCount = parseInt(threatsElement.textContent.replace(/,/g, ''));
            
            setInterval(() => {
                currentCount += Math.floor(Math.random() * 5) + 1;
                threatsElement.textContent = currentCount.toLocaleString();
            }, 3000);
        }
    }

    // Animate progress bars on scroll
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'progress-fill 2s ease-out forwards';
                }
            });
        });

        progressBars.forEach(bar => observer.observe(bar));
    }

    // Security status indicator
    function updateSecurityStatus() {
        const statusIndicators = document.querySelectorAll('.security-status');
        const statuses = ['Secure', 'Monitoring', 'Protected', 'Active'];
        let currentIndex = 0;

        setInterval(() => {
            statusIndicators.forEach(indicator => {
                indicator.textContent = statuses[currentIndex];
            });
            currentIndex = (currentIndex + 1) % statuses.length;
        }, 2000);
    }

    // Parallax effect for hero section
    function initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-bg');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Typing animation for dynamic text
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize dynamic typing for hero subtitle
    function initTypingAnimation() {
        const typingElement = document.querySelector('.typing-animation');
        if (typingElement) {
            const texts = [
                'Protect yourself and your organization from evolving digital threats',
                'Advanced cybersecurity training for the modern world',
                'Stay ahead of hackers with expert-led courses'
            ];
            let textIndex = 0;

            function cycleTexts() {
                typeWriter(typingElement, texts[textIndex], 50);
                textIndex = (textIndex + 1) % texts.length;
            }

            cycleTexts();
            setInterval(cycleTexts, 5000);
        }
    }

    // Intersection Observer for animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.glass-card, .hover-lift').forEach(el => {
            observer.observe(el);
        });
    }

    // Newsletter subscription handler
    function initNewsletterSignup() {
        const newsletterForm = document.querySelector('form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                
                if (email) {
                    // Simulate subscription success
                    const button = this.querySelector('button');
                    const originalText = button.textContent;
                    button.textContent = 'Subscribed!';
                    button.classList.add('bg-green-500');
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.classList.remove('bg-green-500');
                        this.reset();
                    }, 2000);
                }
            });
        }
    }

    // Smooth scroll to sections
    function initSmoothScroll() {
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
    }

    // Security meter animation
    function animateSecurityMeter() {
        const meters = document.querySelectorAll('.security-meter');
        meters.forEach(meter => {
            const shimmer = meter.querySelector('::after');
            setInterval(() => {
                meter.style.animation = 'shimmer 2s ease-in-out';
            }, 3000);
        });
    }

    // Initialize all features
    simulateThreats();
    animateProgressBars();
    updateSecurityStatus();
    initParallax();
    initTypingAnimation();
    initScrollAnimations();
    initNewsletterSignup();
    initSmoothScroll();
    animateSecurityMeter();

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
        }
        
        .cyber-grid {
            animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
        }
    `;
    document.head.appendChild(style);
});

// Advanced features for cybersecurity theme
class SecurityDashboard {
    constructor() {
        this.threats = 0;
        this.initRealTimeUpdates();
    }

    initRealTimeUpdates() {
        // Simulate real-time threat detection
        setInterval(() => {
            this.simulateThreatDetection();
        }, 5000);
    }

    simulateThreatDetection() {
        const threatTypes = ['Malware', 'Phishing', 'DDoS', 'SQL Injection', 'XSS'];
        const randomThreat = threatTypes[Math.floor(Math.random() * threatTypes.length)];
        
        // Show notification
        this.showThreatNotification(randomThreat);
    }

    showThreatNotification(threatType) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        notification.innerHTML = `
            <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <span>${threatType} blocked</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-300">×</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize security dashboard
const securityDashboard = new SecurityDashboard();
