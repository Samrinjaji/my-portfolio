# Samrin Jaji | Portfolio

A personal portfolio website showcasing projects and skills with a clean, modern design and smooth animations.

## Live Demo

[View Live](https://samrinjaji.github.io/my-portfolio/)

## Features

- **Responsive design** — Mobile-first layout that works on all screen sizes
- **Smooth animations** — Hero entrance, scroll-triggered reveals, and section transitions
- **Scroll spy** — Navigation highlights the active section as you scroll
- **Mobile navigation** — Slide-out sidebar with overlay and scroll lock
- **Project showcase** — Featured work with terminal-style cards
- **Contact form** — Integrated with EmailJS for sending messages

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, custom properties)
- Vanilla JavaScript

## Project Structure

```
my-portfolio/
├── assets/
│   ├── css/
│   │   ├── styles.css      # Main styles
│   │   ├── responsive.css  # Media queries
│   │   └── animation.css   # Keyframes & transitions
│   ├── js/
│   │   └── main.js         # App logic
│   ├── icons/              # SVG icons
│   └── images/             # Project images
├── index.html
└── README.md
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Samrinjaji/my-portfolio.git
   cd my-portfolio
   ```

2. Open `index.html` in a browser, or use a local server:
   ```bash
   # Python
   python -m http.server 8000

   # Node.js (npx)
   npx serve
   ```

3. Visit `http://localhost:8000` (or the port shown)

## Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com/). To enable it:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your credentials to `main.js` (see EmailJS docs)

## License

© 2026 Samrin Jaji. All rights reserved.
