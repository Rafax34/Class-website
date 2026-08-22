// ===== DATA =====
const orgData = [
  { role: 'Homeroom Teacher', name: '[EDIT ME: Teacher Name]', photo: null },
  { role: 'Class President', name: '[EDIT ME: President Name]', photo: null },
  { role: 'Vice President', name: '[EDIT ME: VP Name]', photo: null },
  { role: 'Secretary', name: '[EDIT ME: Secretary Name]', photo: null },
  { role: 'Treasurer', name: '[EDIT ME: Treasurer Name]', photo: null },
  { role: 'Academic Committee', name: '[EDIT ME: Head Name]', photo: null },
  { role: 'Sports Committee', name: '[EDIT ME: Head Name]', photo: null },
  { role: 'Cultural Committee', name: '[EDIT ME: Head Name]', photo: null },
];

const rulesData = [
  {
    category: 'Attendance',
    items: [
      'Arrive before 8:00 AM; late arrivals require a pass.',
      'Notify the teacher by 7:30 AM for any absence.',
      'Three unexcused lates = one absence on record.',
    ],
  },
  {
    category: 'Conduct',
    items: [
      'Respect peers, teachers, and school property at all times.',
      'Phones on silent and stored during lessons unless permitted.',
      'No bullying, harassment, or discriminatory language — zero tolerance.',
    ],
  },
  {
    category: 'Assignments',
    items: [
      'Submit work by the due date; late work capped at 80% after 1 day.',
      'Ask for extensions at least 24 hours before the deadline.',
      'Group work: contribute fairly; freeriding affects everyone\'s grade.',
    ],
  },
  {
    category: 'Classroom',
    items: [
      'Keep the room clean; tidy your area before leaving.',
      'Raise hand to speak; listen when others are talking.',
      'Food only during breaks; water allowed anytime.',
    ],
  },
];

const scheduleData = [
  { time: '8:00–8:50', mon: 'Math', tue: 'English', wed: 'Science', thu: 'History', fri: 'PE' },
  { time: '8:55–9:45', mon: 'Science', tue: 'Math', wed: 'English', thu: 'Art', fri: 'History' },
  { time: '9:50–10:40', mon: 'English', tue: 'History', wed: 'Math', thu: 'Science', fri: 'Music' },
  { time: '10:40–11:00', mon: 'Break', tue: 'Break', wed: 'Break', thu: 'Break', fri: 'Break' },
  { time: '11:00–11:50', mon: 'History', tue: 'Science', wed: 'PE', thu: 'Math', fri: 'English' },
  { time: '11:55–12:45', mon: 'Art', tue: 'PE', wed: 'History', thu: 'English', fri: 'Science' },
  { time: '12:45–13:30', mon: 'Lunch', tue: 'Lunch', wed: 'Lunch', thu: 'Lunch', fri: 'Lunch' },
  { time: '13:30–14:20', mon: 'PE', tue: 'Art', wed: 'Music', thu: 'Free', fri: 'Class Meeting' },
  { time: '14:25–15:15', mon: 'Free', tue: 'Free', wed: 'Free', thu: 'Free', fri: 'Free' },
];

const announcementsData = [
  { title: 'Midterm Exam Schedule Released', date: '2025-10-15', text: 'Check the schedule section for dates. Study sessions Mon/Wed 3:30–4:30 PM in Room 204.' },
  { title: 'Field Trip to Science Museum', date: '2025-10-08', text: 'Permission slips due by Oct 20. Cost: $15. Lunch provided.' },
  { title: 'Parent-Teacher Conferences', date: '2025-10-01', text: 'Nov 3–5. Sign up via the class group chat link in Contact.' },
  { title: 'New Club Sign-ups Open', date: '2025-09-25', text: 'Robotics, Debate, and Photography clubs accepting members until Sep 30.' },
  { title: 'Welcome to Class 2-B!', date: '2025-09-01', text: 'Excited for a great year together. Introduce yourself in the group chat!' },
];

const membersData = Array.from({ length: 24 }, (_, i) => ({
  name: `[EDIT ME: Student ${i + 1}]`,
  role: i < 8 ? 'Officer' : 'Member',
  photo: null,
}));

// ===== RENDER FUNCTIONS =====
function renderOrgChart() {
  const container = document.getElementById('orgChart');
  container.innerHTML = orgData.map(m => `
    <article class="org-card fade-up">
      <div class="role">${m.role}</div>
      <div class="name">${m.name}</div>
      <div class="photo" aria-hidden="true">${m.photo ? `<img src="${m.photo}" alt="">` : 'Photo'}</div>
    </article>
  `).join('');
}

function renderRules() {
  const container = document.getElementById('rulesAccordion');
  container.innerHTML = rulesData.map((cat, i) => `
    <article class="accordion-item fade-up" data-index="${i}">
      <button class="accordion-btn" aria-expanded="false" aria-controls="rule-content-${i}">
        <span>${cat.category}</span>
        <span class="accordion-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </button>
      <div class="accordion-content" id="rule-content-${i}" role="region" hidden>
        <div class="accordion-content-inner">
          <ul>${cat.items.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
      content.hidden = !isOpen;
      content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : '0';
    });
  });
}

function renderSchedule() {
  const tbody = document.querySelector('#scheduleTable tbody');
  tbody.innerHTML = scheduleData.map(row => `
    <tr>
      <td>${row.time}</td>
      <td>${row.mon}</td>
      <td>${row.tue}</td>
      <td>${row.wed}</td>
      <td>${row.thu}</td>
      <td>${row.fri}</td>
    </tr>
  `).join('');

  const cardsContainer = document.getElementById('scheduleCards');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri'];
  cardsContainer.innerHTML = days.map((day, d) => `
    <article class="day-card fade-up">
      <h3>${day}</h3>
      ${scheduleData.map((row, i) => `
        <div class="period">
          <span class="time">${row.time}</span>
          <span class="subject ${row[dayKeys[d]] === 'Free' || row[dayKeys[d]] === 'Break' || row[dayKeys[d]] === 'Lunch' ? 'free' : ''}">${row[dayKeys[d]]}</span>
        </div>
      `).join('')}
    </article>
  `).join('');
}

function renderAnnouncements() {
  const container = document.getElementById('announcementsList');
  container.innerHTML = announcementsData.map((a, i) => `
    <article class="announcement fade-up" style="transition-delay: ${i * 0.05}s">
      <header class="announcement-header">
        <h3>${a.title}</h3>
        <time class="date" datetime="${a.date}">${new Date(a.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
      </header>
      <p>${a.text}</p>
    </article>
  `).join('');
}

function renderMembers() {
  const container = document.getElementById('membersGrid');
  container.innerHTML = membersData.map((m, i) => `
    <article class="member-card fade-up" style="transition-delay: ${i * 0.03}s">
      <div class="photo" aria-hidden="true">${m.photo ? `<img src="${m.photo}" alt="">` : m.name}</div>
      <div class="info">
        <div class="name">${m.name}</div>
        <div class="role">${m.role}</div>
      </div>
    </article>
  `).join('');
}

function setLastUpdated() {
  const el = document.getElementById('lastUpdated');
  if (el && el.textContent.includes('EDIT ME')) {
    el.textContent = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

// ===== INTERACTIONS =====
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = Array.from(navLinks).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-30% 0px -65% 0px', threshold: 0 });
  sections.forEach(s => observer.observe(s));
}

function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    btn.hidden = window.scrollY < 300;
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

function initSmoothScrollFallback() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', anchor.getAttribute('href'));
      }
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderOrgChart();
  renderRules();
  renderSchedule();
  renderAnnouncements();
  renderMembers();
  setLastUpdated();
  initNavToggle();
  initActiveNav();
  initScrollTop();
  initScrollAnimations();
  initSmoothScrollFallback();
});