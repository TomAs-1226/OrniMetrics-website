/* ============================================
   OrniMetrics - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    document.documentElement.classList.add('aos-initialized');
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
    });

    // Initialize Lucide icons
    lucide.createIcons();

    // --- Cursor Glow ---
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // --- Navbar scroll ---
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // --- Mobile nav toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // --- Active nav link on scroll ---
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        const scrollY = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav);

    // --- Animated counters ---
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count], .impact-number[data-count]');
        counters.forEach(counter => {
            if (counter.dataset.animated) return;
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                counter.dataset.animated = 'true';
                const target = parseInt(counter.dataset.count);
                const duration = 2000;
                const start = performance.now();

                function update(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    counter.textContent = Math.round(target * eased);
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
            }
        });
    }
    window.addEventListener('scroll', animateCounters);
    animateCounters();

    // --- Hero Particles ---
    const particlesContainer = document.getElementById('heroParticles');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('hero-particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (4 + Math.random() * 4) + 's';
            particle.style.width = (2 + Math.random() * 3) + 'px';
            particle.style.height = particle.style.width;
            particle.style.opacity = 0.2 + Math.random() * 0.4;
            particlesContainer.appendChild(particle);
        }
    }

    // --- Spline hero interactivity toggle ---
    const heroSplineBg = document.querySelector('.hero-spline-bg');
    if (heroSplineBg) {
        // Allow interaction with hero Spline on click
        heroSplineBg.addEventListener('click', () => {
            const iframe = heroSplineBg.querySelector('iframe');
            if (iframe) iframe.style.pointerEvents = 'auto';
        });
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Tech card glow follow mouse ---
    document.querySelectorAll('.tech-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const glow = card.querySelector('.tech-card-glow');
            if (glow) {
                glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(99, 102, 241, 0.06) 0%, transparent 50%)`;
                glow.style.opacity = '1';
            }
        });
        card.addEventListener('mouseleave', () => {
            const glow = card.querySelector('.tech-card-glow');
            if (glow) glow.style.opacity = '0';
        });
    });

    // --- Parallax effect on hero ---
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero-content');
        if (hero) {
            const scrolled = window.scrollY;
            hero.style.transform = `translateY(${scrolled * 0.15}px)`;
            hero.style.opacity = 1 - (scrolled / 800);
        }
    });

    // --- FAQ Accordion ---
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const wasActive = item.classList.contains('active');
            // Close all items
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            // Toggle clicked item
            if (!wasActive) item.classList.add('active');
            // Re-init lucide icons for the chevron
            lucide.createIcons();
        });
    });

    // --- Intersection Observer for staggered reveals ---
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.business-card, .pricing-card, .faq-item').forEach(el => {
        revealObserver.observe(el);
    });

    // --- Tilt effect on pricing cards ---
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = card.classList.contains('pricing-card-featured') ? 'scale(1.05)' : '';
        });
    });

    // --- Magnetic hover on CTA buttons ---
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // --- Nav link active style ---
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--text-primary);
            background: rgba(99, 102, 241, 0.1);
        }
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }
        .revealed {
            animation: scaleIn 0.6s ease forwards;
        }
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
