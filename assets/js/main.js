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

    if (!targetEl) return; // stop if target section not found

    const offset = 80; // header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetEl.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    // smooth scroll
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // highlight active link
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // close mobile menu
    closeMenu();
  });
});



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
  // sections heading
  const revealElements = document.querySelectorAll(".reveal-blur");
  const projectCards = document.querySelectorAll(".reveal-pop");
  const revealPoint = 150;

  const revealIdWrappers = document.querySelectorAll(".reveal-id");
  const revealTextBlocks = document.querySelectorAll(".reveal-text");
  const revealSkillCards = document.querySelectorAll(".reveal-skill");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  // existing reveals
  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });

  projectCards.forEach((card, i) => {
    if (card.getBoundingClientRect().top < windowHeight - revealPoint) {
      setTimeout(() => card.classList.add("active"), i * 100); 
    }
  });

  // ID wrapper reveal
  revealIdWrappers.forEach(wrapper => {
    if (wrapper.getBoundingClientRect().top < windowHeight - revealPoint) {
      wrapper.classList.add("active");
    }
  });

  // About text reveal
  revealTextBlocks.forEach(block => {
    if (block.getBoundingClientRect().top < windowHeight - revealPoint) {
      block.classList.add("active");
    }
  });

  // Skills
  revealSkillCards.forEach((card, i) => {
    if (card.getBoundingClientRect().top < windowHeight - revealPoint) {
      setTimeout(() => card.classList.add("active"), i * 100); 
    }
  });
};

  // run on load and scroll
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});






