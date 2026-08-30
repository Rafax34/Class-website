// ===== Theme toggle (light / dark, saved to localStorage) =====
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', theme === 'light');
}

if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme('dark');
}

themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

// ===== Navbar background on scroll =====
const navbar = document.getElementById('navbar');
function updateNavbar() {
  navbar.classList.toggle('scrolled', window.scrollY > 12);
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ===== Mobile navigation =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

navToggle.addEventListener('click', () => {
  setMenu(!navLinks.classList.contains('open'));
});

// Close menu after clicking a link, and on Escape
navLinks.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});

// ===== Active nav link (scrollspy) =====
const sections = Array.from(document.querySelectorAll('section[id], header[id]'));
const linkEls = Array.from(document.querySelectorAll('.nav-link'));

if ('IntersectionObserver' in window && sections.length) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        linkEls.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((section) => spy.observe(section));
}

// ===== Scroll reveal (fires once per element) =====
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach((el) => reveal.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

// ===== Contact form validation (frontend only) =====
const form = document.getElementById('contactForm');
if (form) {
  const nameInput = document.getElementById('cfName');
  const emailInput = document.getElementById('cfEmail');
  const messageInput = document.getElementById('cfMessage');
  const success = document.getElementById('formSuccess');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(input, errorEl, hasError) {
    input.closest('.field').classList.toggle('has-error', hasError);
    errorEl.hidden = !hasError;
  }

  // Clear an error as soon as the user fixes the field
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener('input', () => {
      const errorId = input.id + 'Error';
      setError(input, document.getElementById(errorId), false);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    if (!nameInput.value.trim()) {
      setError(nameInput, document.getElementById('cfNameError'), true);
      valid = false;
    }
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      setError(emailInput, document.getElementById('cfEmailError'), true);
      valid = false;
    }
    if (!messageInput.value.trim()) {
      setError(messageInput, document.getElementById('cfMessageError'), true);
      valid = false;
    }
    if (!valid) return;

    // Fade the form out, then show the success message
    form.closest('.contact-form-wrap').classList.add('is-submitting');
    setTimeout(() => {
      form.hidden = true;
      success.hidden = false;
      // Let the browser paint it before animating in
      requestAnimationFrame(() => success.classList.add('visible'));
    }, 300);
  });
}

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
