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

// ===== Scroll progress bar =====
const scrollProgress = document.getElementById('scrollProgress');
function updateScrollProgress() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  scrollProgress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

// ===== Typewriter (hero roles) =====
const twText = document.getElementById('twText');
if (twText) {
  const roles = ['Aspiring Developer', 'Student', 'Web Enthusiast'];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    twText.textContent = roles[0];
  } else {
    let ri = 0, ci = 0, deleting = false;
    (function tick() {
      const role = roles[ri];
      if (!deleting) {
        twText.textContent = role.slice(0, ++ci);
        if (ci === role.length) { deleting = true; setTimeout(tick, 1700); return; }
        setTimeout(tick, 70);
      } else {
        twText.textContent = role.slice(0, --ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(tick, 420); return; }
        setTimeout(tick, 40);
      }
    })();
  }
}

// ===== Infinite marquee =====
const marqueeTrack = document.getElementById('marqueeTrack');
if (marqueeTrack) {
  const items = ['HTML', 'CSS', 'JavaScript', 'C++', 'Git', 'GitHub', 'VS Code', 'React', 'AI'];
  const group = items
    .map((t) => `<span class="marquee-item">${t}<span class="m-dot" aria-hidden="true">✦</span></span>`)
    .join('');
  marqueeTrack.insertAdjacentHTML('beforeend', group + group);
}

// ===== Magnetic buttons & 3D tilt (pointer devices only) =====
const finePointer =
  matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !matchMedia('(prefers-reduced-motion: reduce)').matches;

if (finePointer) {
  document.querySelectorAll('[data-magnetic]').forEach((btn) => {
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${(x * 0.3).toFixed(1)}px, ${(y * 0.3).toFixed(1)}px)`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transition = 'transform 0.08s ease-out';
      card.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transition = '';
      card.style.transform = '';
    });
  });
}
