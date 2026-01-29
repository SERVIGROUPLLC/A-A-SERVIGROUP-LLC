/**
 * Navigation Module
 * Handles mobile menu, scrolled header, and active section links.
 */

export function initNavigation() {
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Mobile Menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
            document.body.style.overflow = 'hidden';
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = '';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = '';
        });
    });

    // Scroll Header
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Active Link tracking
    const sections = document.querySelectorAll('section[id]');
    function setActiveLink() {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    window.addEventListener('scroll', setActiveLink);
}
