// button
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('navigation-menu');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
    overlay.classList.toggle('active'); // Toggle overlay
    
    const isExpanded = nav.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', isExpanded);
});

//  overlay
overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
});

// role typing
document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".typing");
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
});

document.addEventListener("DOMContentLoaded", () => {
  const socials = document.querySelector(".hero-socials");
  socials.classList.add("active");

  // Animate each icon with slight delay
  const icons = socials.querySelectorAll("a");
  icons.forEach((icon, i) => {
    icon.style.animation = `iconSlide 0.5s ease forwards`;
    icon.style.animationDelay = `${0.7 + i * 0.1}s`; // starts after line grows
  });
});
