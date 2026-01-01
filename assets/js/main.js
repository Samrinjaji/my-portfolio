const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('show');     
});
