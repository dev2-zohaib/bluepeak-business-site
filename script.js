const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

function setMenuState(isOpen) {
  if (!toggle || !nav) return;
  nav.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = !nav.classList.contains('open');
    setMenuState(isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 960) {
      setMenuState(false);
    }
  });
}

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks for your inquiry. Replace this placeholder behavior with your preferred form handling.');
  });
}
