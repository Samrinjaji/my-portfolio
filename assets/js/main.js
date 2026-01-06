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

// View More Projects functionality
const viewMoreBtn = document.getElementById('viewMoreBtn');
const projectsGrid = document.querySelector('.projects-grid');

if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
        projectsGrid.classList.toggle('show-all');
        
        if (projectsGrid.classList.contains('show-all')) {
            viewMoreBtn.textContent = 'View Less';
        } else {
            viewMoreBtn.textContent = 'View More Projects';
            
            // Scroll back to projects section
            document.querySelector('#projects').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}