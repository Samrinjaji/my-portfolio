const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.main-nav');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.main-nav a');

function openMenu() {
    navMenu.classList.add('active');
    overlay.classList.add('active');
    menuBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleMenu() {
    if (navMenu.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

// Close menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});