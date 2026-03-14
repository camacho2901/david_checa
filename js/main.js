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

    // 9. CONTADOR ANIMADO EN MÉTRICAS
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const suffix = counter.getAttribute('data-suffix') || '';
                const duration = 2500; // 2.5 segundos
                const frameDuration = 1000 / 60; // 60fps
                const totalFrames = Math.round(duration / frameDuration);
                const increment = target / totalFrames;
                let current = 0;
                let frame = 0;

                const updateCounter = () => {
                    frame++;
                    current += increment;
                    
                    if (frame < totalFrames) {
                        counter.textContent = Math.floor(current) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + suffix;
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // 10. PARTÍCULAS EN HERO
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let mouse = { x: null, y: null, radius: 150 };

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            init();
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Seguimiento del mouse
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        canvas.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                // Movimiento base
                this.x += this.speedX;
                this.y += this.speedY;

                // Interacción con el mouse
                if (mouse.x != null && mouse.y != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = mouse.radius;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * this.density;
                    const directionY = forceDirectionY * force * this.density;

                    if (distance < mouse.radius) {
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }

                // Volver a la posición base
                const dxBase = this.baseX - this.x;
                const dyBase = this.baseY - this.y;
                this.x += dxBase * 0.05;
                this.y += dyBase * 0.05;

                // Mantener dentro del canvas
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(0, 168, 232, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        const opacity = 0.2 * (1 - distance / 100);
                        ctx.strokeStyle = `rgba(0, 168, 232, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connectParticles();
            animationId = requestAnimationFrame(animate);
        }

        init();
        animate();

        // Pausar animación cuando no está visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animate();
            }
        });
    }
});
