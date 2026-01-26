const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('primary-nav');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
    overlay.classList.toggle('active'); // Toggle overlay
    
    const isExpanded = nav.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', isExpanded);
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
});

