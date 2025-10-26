// Portfolio Yasser - Animations fluides et interactions
(function() {
    'use strict';
    
    // Animation de révélation au scroll avec IntersectionObserver
    const initScrollReveal = () => {
        const elements = document.querySelectorAll('.loading');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(el => {
            observer.observe(el);
        });
    };
    
    // Animation échelonnée pour les cartes
    const initStaggerAnimation = (selector) => {
        const containers = document.querySelectorAll(selector);
        
        containers.forEach(container => {
            const cards = container.querySelectorAll('.card');
            
            cards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 100}ms`;
                card.classList.add('loading');
            });
        });
    };
    
    // Navbar dynamique au scroll
    const initNavbarScroll = () => {
        const navbar = document.querySelector('.navbar');
        let lastScrollY = window.scrollY;
        
        const updateNavbar = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                navbar.classList.add('navbarDark');
            } else {
                navbar.classList.remove('navbarDark');
            }
            
            // Masquer/afficher la navbar selon la direction du scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        };
        
        updateNavbar();
        window.addEventListener('scroll', updateNavbar, { passive: true });
    };
    
    // Navigation smooth avec offset pour navbar fixe
    const initSmoothAnchors = () => {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href.length > 1) {
                    const target = document.querySelector(href);
                    
                    if (target) {
                        e.preventDefault();
                        
                        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        
                        // Mettre à jour l'état actif des liens de navigation
                        document.querySelectorAll('.nav-link').forEach(navLink => {
                            navLink.classList.remove('active');
                        });
                        
                        link.classList.add('active');
                    }
                }
            });
        });
    };
    
    // Mise à jour automatique du lien actif selon la section visible
    const initActiveNavigation = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-80px 0px -50% 0px'
        });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    };
    
    // Animation du formulaire de contact
    const initContactForm = () => {
        const form = document.querySelector('.contact-form');
        if (!form) return;
        
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    };
    
    // Parallax léger sur le hero
    const initParallax = () => {
        const hero = document.querySelector('.bgimage');
        if (!hero) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            hero.style.transform = `translateY(${parallax}px)`;
        }, { passive: true });
    };
    
    // Animation des compteurs (si présents)
    const initCounters = () => {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;
                const increment = target / 100;
                
                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target;
                }
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    };
    
    // Initialisation au chargement de la page
    const init = () => {
        // Marquer les sections pour animation
        const sectionsToAnimate = ['#about', '#skills', '#portfolio', '#contact'];
        sectionsToAnimate.forEach(selector => {
            const section = document.querySelector(selector);
            if (section) {
                section.classList.add('loading');
            }
        });
        
        // Marquer les éléments individuels
        const elementsToAnimate = document.querySelectorAll('h1, .hero-text > *, .contact-info, .imageAboutPage');
        elementsToAnimate.forEach(el => {
            el.classList.add('loading');
        });
        
        // Initialiser les animations échelonnées
        initStaggerAnimation('#skills .row');
        initStaggerAnimation('#portfolio .row');
        
        // Initialiser toutes les fonctionnalités
        initScrollReveal();
        initNavbarScroll();
        initSmoothAnchors();
        initActiveNavigation();
        initContactForm();
        initParallax();
        initCounters();
        
        // Animation d'entrée du hero
        setTimeout(() => {
            document.querySelector('.hero-text')?.classList.add('loaded');
        }, 300);
    };
    
    // Démarrer quand le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();