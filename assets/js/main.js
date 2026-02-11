document.addEventListener('DOMContentLoaded', () => {
  /* footer year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* mobile nav */
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('navigation-menu');
  const overlay = document.getElementById('overlay');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (menuBtn && nav && overlay) {
    let scrollY = 0;

    const closeMenu = (scrollToY) => {
      nav.classList.remove('active');
      menuBtn.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollToY !== undefined) {
        requestAnimationFrame(() => {
          window.scrollTo({ top: scrollToY, behavior: 'smooth' });
        });
      } else {
        window.scrollTo(0, scrollY);
      }
      menuBtn.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
      scrollY = window.scrollY;
      document.body.classList.add('menu-open');
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      nav.classList.add('active');
      menuBtn.classList.add('active');
      overlay.classList.add('active');
      menuBtn.setAttribute('aria-expanded', 'true');
    };

    menuBtn.addEventListener('click', () => {
      if (nav.classList.contains('active')) closeMenu();
      else openMenu();
    });

    overlay.addEventListener('click', () => closeMenu());

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) closeMenu();
    });

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        if (!href || !href.startsWith('#')) {
          closeMenu();
          return;
        }

        const targetEl = document.querySelector(href);
        if (!targetEl) return;

        e.preventDefault();

        const offset = 80;
        const y =
          targetEl.getBoundingClientRect().top + window.pageYOffset - offset;

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        closeMenu(y);
      });
    });
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

  /* scroll spy - set nav active based on scroll position */
  const sections = [
    document.getElementById('home'),
    document.getElementById('projects'),
    document.getElementById('about'),
    document.getElementById('contact')
  ].filter(Boolean);

  const sectionIds = ['home', 'projects', 'about', 'contact'];
  const headerOffset = 100;

  const updateActiveNav = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    let currentId = 'home';

    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY - headerOffset;
      if (scrollY >= sectionTop) {
        currentId = sectionIds[i];
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentId}`);
      link.setAttribute('aria-current', href === `#${currentId}` ? 'page' : null);
    });
  };

  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav);

  /* about section */
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            aboutObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    aboutObserver.observe(aboutSection);
  }

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

  emailjs.init("1VIEMXSAhc75GVxZr");

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const button = form.querySelector("button");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form.website.value !== "") return;
  
    button.disabled = true;
    button.textContent = "Sending...";
    status.textContent = "";
  
    try {
      await emailjs.sendForm("service_5n36qeg", "template_kenvbn4", form);
      status.textContent = "Message sent successfully ✅";
      form.reset();
    } catch (err) {
      status.textContent = "Something went wrong ❌ Please try again.";
    } finally {
      button.disabled = false;
      button.textContent = "Send Message";
    }
  });  
});

