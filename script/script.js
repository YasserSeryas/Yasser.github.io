// ========================================
// PORTFOLIO YASSER - JavaScript Moderne
// Dark Mode + Animations + Interactions
// ========================================

(function() {
    'use strict';
    
    // ========================================
    // DARK MODE TOGGLE
    // ========================================
    
    const initDarkMode = () => {
        // Récupérer la préférence sauvegardée ou détecter la préférence système
        const getInitialTheme = () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme;
            
            // Si pas de préférence sauvegardée, utiliser la préférence système
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        };
        
        // Appliquer le thème
        const applyTheme = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            // Mettre à jour l'icône du bouton si présent
            const themeIcon = document.querySelector('.theme-toggle i');
            if (themeIcon) {
                themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        };
        
        // Initialiser le thème au chargement
        const initialTheme = getInitialTheme();
        applyTheme(initialTheme);
        
        // Créer le bouton toggle si pas déjà présent
        const createThemeToggle = () => {
            const navbar = document.querySelector('.navbar-nav');
            if (!navbar || document.querySelector('.theme-toggle')) return;
            
            const themeToggle = document.createElement('li');
            themeToggle.className = 'nav-item';
            themeToggle.innerHTML = `
                <a class="nav-link theme-toggle" href="#" role="button" aria-label="Toggle dark mode">
                    <i class="${initialTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}"></i>
                </a>
            `;
            
            navbar.appendChild(themeToggle);
        };
        
        createThemeToggle();
        
        // Gérer le clic sur le bouton toggle
        document.addEventListener('click', (e) => {
            if (e.target.closest('.theme-toggle')) {
                e.preventDefault();
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            }
        });
        
        // Écouter les changements de préférence système
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    };
    
    // ========================================
    // ANIMATIONS AU SCROLL
    // ========================================
    
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
    
    // ========================================
    // NAVBAR DYNAMIQUE
    // ========================================
    
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
    
    // ========================================
    // NAVIGATION SMOOTH
    // ========================================
    
    const initSmoothAnchors = () => {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href.length > 1 && !link.classList.contains('theme-toggle')) {
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
    
    // ========================================
    // NAVIGATION ACTIVE AUTO
    // ========================================
    
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
    
    // ========================================
    // FORMULAIRE CONTACT
    // ========================================
    
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
        
        // Gérer la soumission du formulaire
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Récupérer les valeurs
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const subject = form.querySelector('#subject').value;
            const message = form.querySelector('#message').value;
            
            // Construire le lien mailto
            const mailtoLink = `mailto:yasseryoussoufm@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Ouvrir le client email
            window.location.href = mailtoLink;
            
            // Optionnel : Réinitialiser le formulaire
            // form.reset();
        });
    };
    
    // ========================================
    // PARALLAX LÉGER
    // ========================================
    
    const initParallax = () => {
        const hero = document.querySelector('.bgimage');
        if (!hero) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            hero.style.transform = `translateY(${parallax}px)`;
        }, { passive: true });
    };
    
    // ========================================
    // ANIMATION COMPTEURS
    // ========================================
    
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
    
    // ========================================
    // ANIMATION PROGRESS BARS
    // ========================================
    
    const initProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                    
                    observer.unobserve(progressBar);
                }
            });
        }, {
            threshold: 0.5
        });
        
        progressBars.forEach(bar => {
            observer.observe(bar);
        });
    };
    
    // ========================================
    // INITIALISATION GLOBALE
    // ========================================
    
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
        initDarkMode();            // NOUVEAU: Dark Mode Toggle
        initScrollReveal();
        initNavbarScroll();
        initSmoothAnchors();
        initActiveNavigation();
        initContactForm();
        initParallax();
        initCounters();
        initProgressBars();        // NOUVEAU: Animation progress bars
        
        // Animation d'entrée du hero
        setTimeout(() => {
            document.querySelector('.hero-text')?.classList.add('loaded');
        }, 300);
        
        console.log('🚀 Portfolio chargé avec succès!');
        console.log('🌓 Dark Mode disponible - cliquez sur l\'icône lune/soleil');
    };
    
    // Démarrer quand le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
