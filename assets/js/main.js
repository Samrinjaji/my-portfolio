const menuBtn = document.querySelector('.menu-btn');
const mainNav = document.querySelector('.main-nav');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    mainNav.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mainNav.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    mainNav.classList.remove('active');
    overlay.classList.remove('active');
});
