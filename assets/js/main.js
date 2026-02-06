// navigation
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('navigation-menu');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-links a');

// menu toggle
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('active');
  overlay.classList.toggle('active');
  menuBtn.setAttribute(
    'aria-expanded',
    nav.classList.contains('active')
  );
});

overlay.addEventListener('click', () => {
  closeMenu();
});

// active navigation
const currentPage =
  location.pathname.split('/').pop().split('?')[0] || 'index.html';

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    const offset = 80; // height of your header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetEl.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // close mobile menu
    nav.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});


function closeMenu() {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  menuBtn.classList.remove('active');
  menuBtn.setAttribute('aria-expanded', 'false');
}


document.addEventListener("DOMContentLoaded", () => {
  // typing
  const el = document.querySelector(".typing");
  if (el) {
    const text = el.dataset.text;
    let index = 0;
    const speed = 100;
    const startDelay = 800;

    setTimeout(() => {
      const type = () => {
        if (index < text.length) {
          el.textContent += text.charAt(index);
          index++;
          setTimeout(type, speed);
        } else {
          el.classList.add("done");
        }
      };
      type();
    }, startDelay);
  }

  // socials animation
  const socials = document.querySelector(".hero-socials");
  if (socials) {
    socials.classList.add("active");

    const icons = socials.querySelectorAll("a");
    icons.forEach((icon, i) => {
      icon.style.animation = `iconSlide 0.5s ease forwards`;
      icon.style.animationDelay = `${0.7 + i * 0.1}s`;
    });
  }
});






