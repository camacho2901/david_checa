/* ==========================================================================
   INTERACTIVIDAD MÉDICA PREMIUM - VANILLA JS 
   (Optimizaciones visuales puras, sin dependencias pesadas)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. HEADER STICKY & EFECTOS DE FONDO
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. MOBILE MENU ULTRA SUAVE
    const toggle = document.querySelector('.mobile-menu-toggle');
    const close = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.mobile-nav-overlay');

    if (toggle && close && overlay) {
        toggle.addEventListener('click', () => {
            overlay.style.display = 'flex';
            void overlay.offsetWidth;
            overlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            overlay.classList.remove('show');
            document.body.style.overflow = '';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 300);
        });

        // Cerrar al hacer clic en los enlaces
        overlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                overlay.classList.remove('show');
                document.body.style.overflow = '';
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 300);
            });
        });
    }

    // 3. FAQ ACCORDION SUAVE
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                const answer = item.querySelector('.faq-answer');
                const icon = item.querySelector('i');
                const isActive = item.classList.contains('active');

                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    const otherIcon = otherItem.querySelector('i');
                    if (otherIcon) otherIcon.className = 'fas fa-plus';
                });

                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    if (icon) icon.className = 'fas fa-minus';
                }
            });
        });
    }

    // 4. INTERSECTION OBSERVER (Animaciones de Scroll)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => observer.observe(el));

    // 5. SMOOTH SCROLL para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 6. VALIDACIÓN DE FORMULARIOS
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nombre = document.querySelector('#nombre');
            const telefono = document.querySelector('#telefono');
            const email = document.querySelector('#email');
            const mensaje = document.querySelector('#mensaje');

            let isValid = true;
            let errorMsg = '';

            if (nombre && !nombre.value.trim()) {
                isValid = false;
                errorMsg += 'Por favor ingrese su nombre.\n';
            }

            if (telefono && !telefono.value.trim()) {
                isValid = false;
                errorMsg += 'Por favor ingrese su teléfono.\n';
            }

            if (email && !email.value.trim()) {
                isValid = false;
                errorMsg += 'Por favor ingrese su correo electrónico.\n';
            } else if (email && !isValidEmail(email.value)) {
                isValid = false;
                errorMsg += 'Por favor ingrese un correo electrónico válido.\n';
            }

            if (mensaje && !mensaje.value.trim()) {
                isValid = false;
                errorMsg += 'Por favor ingrese su mensaje.\n';
            }

            if (!isValid) {
                e.preventDefault();
                alert(errorMsg);
            }
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // 7. EFECTO PARALLAX SUTIL EN HERO
    const heroSection = document.querySelector('.hero-inst');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }

    // 8. ACTIVE NAV LINK
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-list a, .mobile-nav-overlay a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});
