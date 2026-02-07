document.addEventListener('DOMContentLoaded', () => {
  /* mobile nav */
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('navigation-menu');
  const overlay = document.getElementById('overlay');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (menuBtn && nav && overlay) {
    const closeMenu = () => {
      nav.classList.remove('active');
      menuBtn.classList.remove('active');
      overlay.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    };

    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('active');
      menuBtn.classList.toggle('active');
      overlay.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    overlay.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        // Allow normal navigation for external / page links
        if (!href || !href.startsWith('#')) {
          closeMenu();
          return;
        }

        const targetEl = document.querySelector(href);
        if (!targetEl) return;

        e.preventDefault();

        const offset = 80;
        const y =
          targetEl.getBoundingClientRect().top +
          window.pageYOffset -
          offset;

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        closeMenu();
      });
    });
  }

  /* typing */
  const typingEl = document.querySelector('.typing');
  if (typingEl?.dataset.text) {
    const text = typingEl.dataset.text;
    let index = 0;

    setTimeout(function type() {
      if (index < text.length) {
        typingEl.textContent += text[index++];
        setTimeout(type, 100);
      } else {
        typingEl.classList.add('done');
      }
    }, 800);
  }

  /* hero social animation */
  const socials = document.querySelector('.hero-socials');
  if (socials) {
    socials.classList.add('active');
    socials.querySelectorAll('a').forEach((icon, i) => {
      icon.style.animation = 'iconSlide 0.5s ease forwards';
      icon.style.animationDelay = `${0.7 + i * 0.1}s`;
    });
  }

  /* reveal scroll */
  const revealPoint = 150;
  const revealGroups = [
    { els: document.querySelectorAll('.reveal-blur') },
    { els: document.querySelectorAll('.reveal-id') },
    { els: document.querySelectorAll('.reveal-text') },
    { els: document.querySelectorAll('.reveal-pop'), stagger: true },
    { els: document.querySelectorAll('.reveal-skill'), stagger: true }
  ];

  const revealOnScroll = () => {
    const winH = window.innerHeight;

    revealGroups.forEach(group => {
      group.els.forEach((el, i) => {
        if (el.getBoundingClientRect().top < winH - revealPoint) {
          if (group.stagger) {
            setTimeout(() => el.classList.add('active'), i * 100);
          } else {
            el.classList.add('active');
          }
        }
      });
    });
  };

  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

  /* card active*/
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', e => {
      e.stopPropagation();
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  /* id card switching */
  const idWrapper = document.querySelector('.id-wrapper');
  const cardFront = document.querySelector('.card-front');
  const cardBack = document.querySelector('.card-back');
  const cardCode = document.querySelector('.card-code');

  if (idWrapper && cardFront && cardBack && cardCode) {
    cardFront.addEventListener('click', e => {
      e.stopPropagation();
      idWrapper.classList.remove('show-back', 'show-code');
    });

    cardBack.addEventListener('click', e => {
      e.stopPropagation();
      idWrapper.classList.remove('show-code');
      idWrapper.classList.add('show-back');
    });

    cardCode.addEventListener('click', e => {
      e.stopPropagation();
      idWrapper.classList.remove('show-back');
      idWrapper.classList.add('show-code');
    });
  }
});