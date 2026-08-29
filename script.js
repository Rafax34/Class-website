// ===== TRANSLATIONS =====
const translations = {
  // Nav
  'nav-home': { id: 'Beranda', en: 'Home' },
  'nav-structure': { id: 'Struktur', en: 'Structure' },
  'nav-rules': { id: 'Aturan', en: 'Rules' },
  'nav-schedule': { id: 'Jadwal', en: 'Schedule' },
  'nav-teachers': { id: 'Guru', en: 'Teachers' },
  'nav-cleaning': { id: 'Piket', en: 'Cleaning' },
  'nav-homework': { id: 'PR', en: 'Homework' },
  'nav-members': { id: 'Anggota', en: 'Members' },
  'nav-memory': { id: 'Kenangan', en: 'Memory' },
  'nav-location': { id: 'Lokasi', en: 'Location' },

  // Section headers
  'hero-tagline': { id: 'Tahun Ajaran 2025–2026 · Ruang Kelas X-D', en: '2025–2026 Academic Year · Homeroom X-D' },
  'structure-title': { id: 'Struktur Kelas', en: 'Class Structure' },
  'structure-subtitle': { id: 'Tim pengurus kelas kami', en: 'Our leadership team for the year' },
  'rules-title': { id: 'Aturan Kelas', en: 'Class Rules' },
  'rules-subtitle': { id: 'Pedoman yang menjaga kelancaran kelas', en: 'Guidelines that keep our class running smoothly' },
  'schedule-title': { id: 'Jadwal Mingguan', en: 'Weekly Schedule' },
  'schedule-subtitle': { id: 'Sen–Jum, Jam 7-Pulang', en: 'Mon–Fri, Periods 7-Go Home' },
  'teachers-title': { id: 'Guru', en: 'Teachers' },
  'teachers-subtitle': { id: 'Guru mata pelajaran kami', en: 'Our subject teachers' },
  'cleaning-title': { id: 'Jadwal Piket', en: 'Cleaning Schedule' },
  'cleaning-subtitle': { id: 'Tugas piket mingguan', en: 'Weekly class cleaning duties' },
  'homework-title': { id: 'PR', en: 'Homework' },
  'homework-subtitle': { id: 'Tugas dan pekerjaan rumah', en: 'Assignments and homework' },
  'members-title': { id: 'Anggota', en: 'Members' },
  'members-subtitle': { id: 'Keluarga kelas kami', en: 'Our class family' },
  'location-title': { id: 'Lokasi', en: 'Location' },
  'location-subtitle': { id: 'Temukan kami di sini', en: 'Find us here' },
  'location-room': { id: 'Ruang Kelas', en: 'Homeroom' },
  'location-room-text': { id: 'Gedung B, Ruang X-D', en: 'Building B, Room X-D' },
  'last-updated': { id: 'Terakhir diperbarui:', en: 'Last updated:' },

  // Memory section
  'memory-title': { id: 'Kenangan Kelas', en: 'Class Memory' },
  'memory-subtitle': { id: 'Momen-momen berharga kami', en: 'Our favorite moments together' },

  // Roles
  'role-homeroom': { id: 'Wali Kelas', en: 'Homeroom Teacher' },
  'role-president': { id: 'Ketua Kelas', en: 'Class President' },
  'role-vice': { id: 'Wakil Ketua', en: 'Vice President' },
  'role-secretary': { id: 'Sekretaris', en: 'Secretary' },
  'role-treasurer': { id: 'Bendahara', en: 'Treasurer' },
  'role-security': { id: 'Seksi Keamanan', en: 'Security Committee' },
  'role-cleaning': { id: 'Seksi Kebersihan', en: 'Cleaning Committee' },
  'role-medsos': { id: 'Tim Medsos', en: 'Social Media Team' },
  'role-member': { id: 'Anggota', en: 'Member' },

  // Schedule subjects
  'subject-upacara': { id: 'Upacara', en: 'Ceremony' },
  'subject-senam': { id: 'Senam Pagi', en: 'Morning Exercise' },
  'subject-istirahat': { id: 'Istirahat', en: 'Break' },
  'subject-indonesia': { id: 'Bahasa Indonesia', en: 'Indonesian' },
  'subject-math': { id: 'Matematika', en: 'Mathematics' },
  'subject-physics': { id: 'Fisika', en: 'Physics' },
  'subject-chembio': { id: 'Kimia', en: 'Chemistry' },
  'subject-bio': { id: 'Biologi', en: 'Biology' },
  'subject-pancasila': { id: 'Pendidikan Pancasila', en: 'Civics' },
  'subject-informatics': { id: 'Informatika', en: 'Informatics' },
  'subject-sociology': { id: 'Sosiologi', en: 'Sociology' },
  'subject-pjok': { id: 'PJOK', en: 'PE' },
  'subject-economy': { id: 'Ekonomi/PKWU', en: 'Economics' },
  'subject-music': { id: 'Seni Musik', en: 'Music' },
  'subject-english': { id: 'Bahasa Inggris', en: 'English' },
  'subject-islam': { id: 'Pendidikan Agama Islam', en: 'Islamic Studies' },
  'subject-history': { id: 'Sejarah', en: 'History' },
  'subject-histgeo': { id: 'Geografi', en: 'Geography' },

  // Rules categories
  'rules-attendance': { id: 'Kehadiran', en: 'Attendance' },
  'rules-conduct': { id: 'Tingkah Laku', en: 'Conduct' },
  'rules-assignments': { id: 'Tugas', en: 'Assignments' },
  'rules-classroom': { id: 'Kelas', en: 'Classroom' },

  // Rules items
  'rule-1': { id: 'Wajib izin kepada wali kelas jika tidak masuk atau terlambat.', en: 'Must inform homeroom teacher if absent or late.' },
  'rule-2': { id: 'Ucapkan salam sebelum dan sesudah pelajaran.', en: 'Say greetings before and after lessons.' },
  'rule-3': { id: 'Wajib membawa botol minum, kotak makan, dan alat sholat setiap hari.', en: 'Must bring water bottle, lunch box, and prayer tools every day.' },
  'rule-4': { id: 'Bersikap sopan dan santun kepada seluruh warga sekolah.', en: 'Be polite and respectful to all school members.' },
  'rule-5': { id: 'Tidak boleh mengambil barang yang bukan miliknya.', en: 'Must not take things that do not belong to you.' },
  'rule-6': { id: 'Dilarang pacaran sekelas.', en: 'No dating within the class.' },
  'rule-7': { id: 'Dilarang berkelompok atau membuat sirkel sendiri di X-D.', en: 'No forming exclusive groups or cliques in X-D.' },
  'rule-8': { id: 'Saling mengingatkan jika ada tugas atau ulangan.', en: 'Remind each other about assignments or tests.' },
  'rule-9': { id: 'Jika tidak piket, diganti hari selanjutnya.', en: 'If absent from cleaning duty, must make up the next day.' },
  'rule-10': { id: 'Semua siswa X-D wajib menjaga kebersihan kelas.', en: 'All X-D students must keep the classroom clean.' },

  // Days
  'day-mon': { id: 'Senin', en: 'Monday' },
  'day-tue': { id: 'Selasa', en: 'Tuesday' },
  'day-wed': { id: 'Rabu', en: 'Wednesday' },
  'day-thu': { id: 'Kamis', en: 'Thursday' },
  'day-fri': { id: 'Jumat', en: 'Friday' },
};

// Current language
let currentLang = 'id';

function t(key) {
  return translations[key]?.[currentLang] || key;
}

// ===== DATA =====
const orgData = [
  { roleKey: 'role-homeroom', name: 'Lisa Febriandini S.Pd.Gr', photo: 'assets/images/Class-Structure/Wali kelas.jpeg' },
  { roleKey: 'role-president', name: 'Asyifha Dwiharti', photo: 'assets/images/Class-Structure/Ketua kelas-Asyifha Dwiharti.jpeg' },
  { roleKey: 'role-vice', name: 'Usman', photo: 'assets/images/Class-Structure/Wakil Ketua-Usman.jpeg' },
  { roleKey: 'role-secretary', name: 'Mutiara Revina Kurniawan', photo: null },
  { roleKey: 'role-secretary', name: 'Devita Maharani', photo: 'assets/images/Class-Structure/Sekretaris-Devita Maharani.jpeg' },
  { roleKey: 'role-treasurer', name: 'Fartillah Suci Zaskhia', photo: 'assets/images/Class-Structure/Bendahara-Fartillah Suci Zaskia.jpeg' },
  { roleKey: 'role-treasurer', name: 'Indah Amelia', photo: 'assets/images/Class-Structure/Bendahara-Indah.png' },
  { roleKey: 'role-security', name: 'Ali Al Khalili', photo: 'assets/images/Class-Structure/seksi keamanan-Ali Al Khalili.jpeg' },
  { roleKey: 'role-security', name: 'Khairulil Abrar', photo: 'assets/images/Class-Structure/seksi keamanan-Khairulil abrar.jpeg' },
  { roleKey: 'role-cleaning', name: 'Rista Istiqomah', photo: 'assets/images/Class-Structure/seksi kebersihan-Rista Istiqomah.jpeg' },
  { roleKey: 'role-cleaning', name: 'Muhammad Baihaqi Akram', photo: 'assets/images/Class-Structure/seksi kebersihan-M. Baihaqi Akram.jpeg' },
  { roleKey: 'role-cleaning', name: 'Hari Kurniawan', photo: 'assets/images/Class-Structure/seksi kebersihan-Hari Kurniawan.jpeg' },
  { roleKey: 'role-medsos', name: 'Alin Qistina Ningabhia', photo: null },
  { roleKey: 'role-medsos', name: 'Muhammad Deron Phaedra Al-Bahy', photo: 'assets/images/Class-Structure/Tim Medsos-M. Deron.jpeg' },
  { roleKey: 'role-medsos', name: 'Alvina Angelicha Nhovarinda', photo: null },
];

const rulesData = [
  {
    categoryKey: 'rules-attendance',
    itemKeys: ['rule-1'],
  },
  {
    categoryKey: 'rules-conduct',
    itemKeys: ['rule-2', 'rule-3', 'rule-4', 'rule-5', 'rule-6', 'rule-7'],
  },
  {
    categoryKey: 'rules-assignments',
    itemKeys: ['rule-8'],
  },
  {
    categoryKey: 'rules-classroom',
    itemKeys: ['rule-9', 'rule-10'],
  },
];

const scheduleData = [
  { time: '07:00–07:45', mon: 'subject-upacara', tue: 'subject-math', wed: 'subject-physics', thu: 'subject-chembio', fri: 'subject-senam' },
  { time: '07:45–08:30', mon: 'subject-indonesia', tue: 'subject-math', wed: 'subject-physics', thu: 'subject-chembio', fri: 'subject-senam' },
  { time: '08:30–09:15', mon: 'subject-indonesia', tue: 'subject-pancasila', wed: 'subject-physics', thu: 'subject-chembio', fri: 'subject-pjok' },
  { time: '09:15–10:00', mon: 'subject-indonesia', tue: 'subject-pancasila', wed: 'subject-informatics', thu: 'subject-sociology', fri: 'subject-pjok' },
  { time: '10:00–10:15', mon: 'subject-istirahat', tue: 'subject-istirahat', wed: 'subject-istirahat', thu: 'subject-istirahat', fri: 'subject-istirahat' },
  { time: '10:15–11:00', mon: 'subject-economy', tue: 'subject-bio', wed: 'subject-informatics', thu: 'subject-sociology', fri: 'subject-music' },
  { time: '11:00–11:45', mon: 'subject-economy', tue: 'subject-bio', wed: 'subject-math', thu: 'subject-sociology', fri: 'subject-music' },
  { time: '11:45–12:30', mon: 'subject-economy', tue: 'subject-bio', wed: 'subject-math', thu: 'subject-english', fri: '-' },
  { time: '12:30–13:00', mon: 'subject-istirahat', tue: 'subject-istirahat', wed: 'subject-istirahat', thu: 'subject-istirahat', fri: '-' },
  { time: '13:00–13:45', mon: 'subject-islam', tue: 'subject-histgeo', wed: 'subject-history', thu: 'subject-english', fri: '-' },
  { time: '13:45–14:30', mon: 'subject-islam', tue: 'subject-histgeo', wed: 'subject-history', thu: 'subject-english', fri: '-' },
  { time: '14:30–15:15', mon: 'subject-islam', tue: 'subject-histgeo', wed: 'subject-history', thu: '-', fri: '-' },
];

const homeworkData = [
  { title: 'Geografi', date: '2026-8-11', text: '10 pengertian dengan masing-masing 1 contoh. ada di wa' },
  { title: 'Seni Musik', date: '2026-8-21', text: '4 Gambar objek terserah. 1. gambar original 2. gambar distorsi 3. gambar deformasi 4. gambar abstraksi.' },
  { title: 'Pengambilan Buku Paket', date: '2026-8-24', text: 'Siapkan 9 Sampul bening serta alat untuk masang. tanggal belum pasti. Kemungkinan senin' },
  { title: 'Biologi', date: '2026-8-11', text: 'Tugas Kelompok. Mulai mengerjakan ketika masuk kembali(Tatap muka). ada di WA.' },
  { title: 'Kimia', date: '2026-8-27', text: 'Tugas Cetak yang pdf Soal Kimia. Yang laboratorium di baca. pengumpulan saat masuk kembali.' },
  { title: 'Sosiologi', date: '2026-08-27', text: 'Print LKPD dan kerjakan di kertasnya. ada di WA. pengumpulan saat masuk kembali.' },
  { title: 'kosong', date: '2026-08-29', text: 'kosong' },
  { title: 'kosong', date: '2026-08-30', text: 'kosong' },
];

const membersData = [
  { name: 'Al Fathan Kurniawan', roleKey: 'role-member', photo: null },
  { name: 'Ali Al Khalili', roleKey: 'role-member', photo: null },
  { name: 'Alin Qistina Ningabhia', roleKey: 'role-member', photo: null },
  { name: 'Alvin Askaresky', roleKey: 'role-member', photo: null },
  { name: 'Alvina Angelicha Nhovarinda', roleKey: 'role-member', photo: null },
  { name: 'Alvino Diendra', roleKey: 'role-member', photo: null },
  { name: 'Asyifha Dwiharti', roleKey: 'role-member', photo: null },
  { name: 'Cyndi Vanecya Aurha', roleKey: 'role-member', photo: null },
  { name: 'Devita Maharani', roleKey: 'role-member', photo: null },
  { name: 'Dinara Indi Hartono', roleKey: 'role-member', photo: null },
  { name: 'Dyarum Clarisya', roleKey: 'role-member', photo: null },
  { name: 'Elgita Cherly Prabella', roleKey: 'role-member', photo: null },
  { name: 'Eliza Rahmi', roleKey: 'role-member', photo: null },
  { name: 'Farel Saputra', roleKey: 'role-member', photo: null },
  { name: 'Fartillah Suci Zaskhia', roleKey: 'role-member', photo: null },
  { name: 'Happy Qorri Aina', roleKey: 'role-member', photo: null },
  { name: 'Hari Kurniawan', roleKey: 'role-member', photo: null },
  { name: 'Indah Amelia', roleKey: 'role-member', photo: null },
  { name: 'Indira Cahaya Rabbani', roleKey: 'role-member', photo: null },
  { name: 'Khairulil Abrar', roleKey: 'role-member', photo: null },
  { name: 'Meita Hafiza', roleKey: 'role-member', photo: null },
  { name: 'Muhammad Ary Azhari', roleKey: 'role-member', photo: null },
  { name: 'Muhammad Baihaqi Akram', roleKey: 'role-member', photo: null },
  { name: 'Muhammad Deron Phaedra Al-Bahy', roleKey: 'role-member', photo: null },
  { name: 'Mutiara Revina Kurniawan', roleKey: 'role-member', photo: null },
  { name: 'Naufal Ardian Rafi\'zal', roleKey: 'role-member', photo: null },
  { name: 'Nayaka Putri Effie', roleKey: 'role-member', photo: null },
  { name: 'Novtafiani', roleKey: 'role-member', photo: null },
  { name: 'Rafa Aydinfadhilah', roleKey: 'role-member', photo: null },
  { name: 'Refi Leytisaputri', roleKey: 'role-member', photo: null },
  { name: 'Rista Istiqomah', roleKey: 'role-member', photo: null },
  { name: 'Salsa Bela', roleKey: 'role-member', photo: null },
  { name: 'Syarif Miftahul Huda', roleKey: 'role-member', photo: null },
  { name: 'Syabila', roleKey: 'role-member', photo: null },
  { name: 'Tyara', roleKey: 'role-member', photo: null },
  { name: 'Usman', roleKey: 'role-member', photo: null },
];

const teachersData = [
  { subjectKey: 'subject-indonesia', teacher: 'Hilda Yuliani' },
  { subjectKey: 'subject-economy', teacher: 'Jardi' },
  { subjectKey: 'subject-islam', teacher: 'Muhammad Saparudin' },
  { subjectKey: 'subject-math', teacher: 'Suparmi' },
  { subjectKey: 'subject-pancasila', teacher: 'Ponirah' },
  { subjectKey: 'subject-bio', teacher: 'Sri Maryani' },
  { subjectKey: 'subject-histgeo', teacher: 'Ivan Bayu Putra' },
  { subjectKey: 'subject-physics', teacher: 'Deka Maulidiansyah' },
  { subjectKey: 'subject-informatics', teacher: 'Reza Wirasetya' },
  { subjectKey: 'subject-history', teacher: 'Susanti Kristella' },
  { subjectKey: 'subject-chembio', teacher: 'Marsela Winda' },
  { subjectKey: 'subject-sociology', teacher: 'Harniyanti' },
  { subjectKey: 'subject-english', teacher: 'Mamie Maliyanti' },
  { subjectKey: 'subject-pjok', teacher: 'Eva Krisdawati' },
  { subjectKey: 'subject-music', teacher: 'Nanda Faisal' },
];

const cleaningData = [
  { dayKey: 'day-mon', students: 'Alvin Askaresky (PJ), Dinara Indi Hartono, Farel Saputra, Indira Cahaya Rabbani, Nayaka Putri Effie, Novtafiani XD, Syabila XD, Usman' },
  { dayKey: 'day-tue', students: 'Al Fathan Kurniawan (PJ), Alvino Diendra, Dyarum Clarisya, Indah Amelia, Mutiara Revina Kurniawan, Rista Istiqomah, Syarif Miftahul Huda' },
  { dayKey: 'day-wed', students: 'Alin Qistina Ningabhia (PJ), Cyndi Vanecya Aurha, Devita Maharani, Fartillah Suci Zaskhia, Hari Kurniawan, Muhammad Deron Phaedra Al-Bahy, Rafa Aydinfadhilah' },
  { dayKey: 'day-thu', students: 'Ali Al Khalili (PJ), Asyifha Dwiharti, Eliza Rahmi, Khairulil Abrar, Refi Leytisaputri, Syabila XD, Tyara XD' },
  { dayKey: 'day-fri', students: 'Alvina Angelicha Nhovarinda (PJ), Elgita Cherly Prabella, Meita Hafiza, Muhammad Ary Azhari, Muhammad Baihaqi Akram, Naufal Ardian Rafi\'zal, Salsa Bela' },
];

const memoryData = [
  { caption: 'Hari Pertama Sekolah', date: '2025-07-14', photo: null },
  { caption: 'Kosong', date: '2025-08-17', photo: null },
  { caption: 'Kosong', date: '2025-09-20', photo: null },
  { caption: 'Kosong', date: '2025-10-05', photo: null },
  { caption: 'Kosong', date: '2025-12-20', photo: null },
];

// ===== RENDER FUNCTIONS =====
function renderOrgChart() {
  const container = document.getElementById('orgChart');
  container.innerHTML = orgData.map(m => `
    <article class="org-card fade-up">
      <div class="role" data-translate="${m.roleKey}">${t(m.roleKey)}</div>
      <div class="name">${m.name}</div>
      <div class="photo" aria-hidden="true">${m.photo ? `<img src="${m.photo}" alt="">` : (currentLang === 'id' ? 'Foto' : 'Photo')}</div>
    </article>
  `).join('');
}

function renderRules() {
  const container = document.getElementById('rulesAccordion');
  container.innerHTML = rulesData.map((cat, i) => `
    <article class="accordion-item fade-up" data-index="${i}">
      <button class="accordion-btn" aria-expanded="false" aria-controls="rule-content-${i}">
        <span data-translate="${cat.categoryKey}">${t(cat.categoryKey)}</span>
        <span class="accordion-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </button>
      <div class="accordion-content" id="rule-content-${i}" role="region" hidden>
        <div class="accordion-content-inner">
          <ul>${cat.itemKeys.map(key => `<li data-translate="${key}">${t(key)}</li>`).join('')}</ul>
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
      <td data-translate="${row.mon}">${row.mon === '-' ? '-' : t(row.mon)}</td>
      <td data-translate="${row.tue}">${row.tue === '-' ? '-' : t(row.tue)}</td>
      <td data-translate="${row.wed}">${row.wed === '-' ? '-' : t(row.wed)}</td>
      <td data-translate="${row.thu}">${row.thu === '-' ? '-' : t(row.thu)}</td>
      <td data-translate="${row.fri}">${row.fri === '-' ? '-' : t(row.fri)}</td>
    </tr>
  `).join('');

  const cardsContainer = document.getElementById('scheduleCards');
  const dayKeys = ['day-mon', 'day-tue', 'day-wed', 'day-thu', 'day-fri'];
  const dayAttrKeys = ['mon', 'tue', 'wed', 'thu', 'fri'];
  cardsContainer.innerHTML = dayKeys.map((dayKey, d) => `
    <article class="day-card fade-up">
      <h3 data-translate="${dayKey}">${t(dayKey)}</h3>
      ${scheduleData.map((row, i) => `
        <div class="period">
          <span class="time">${row.time}</span>
          <span class="subject ${row[dayAttrKeys[d]] === 'subject-istirahat' ? 'free' : ''}" data-translate="${row[dayAttrKeys[d]]}">${row[dayAttrKeys[d]] === '-' ? '-' : t(row[dayAttrKeys[d]])}</span>
        </div>
      `).join('')}
    </article>
  `).join('');
}

function renderTeachers() {
  const container = document.getElementById('teachersList');
  container.innerHTML = teachersData.map((tItem, i) => `
    <div class="teacher-item fade-up" style="transition-delay: ${i * 0.03}s">
      <span class="teacher-subject" data-translate="${tItem.subjectKey}">${t(tItem.subjectKey)}</span>
      <span class="teacher-name">${tItem.teacher}</span>
    </div>
  `).join('');
}

function renderCleaning() {
  const container = document.getElementById('cleaningGrid');
  container.innerHTML = cleaningData.map((c, i) => {
    const students = c.students.split(', ').map(s => `• ${s}`).join('<br>');
    return `
    <article class="cleaning-card fade-up" style="transition-delay: ${i * 0.05}s">
      <div class="cleaning-day" data-translate="${c.dayKey}">${t(c.dayKey)}</div>
      <div class="cleaning-students">${students}</div>
    </article>
  `;
  }).join('');
}

function renderHomework() {
  const container = document.getElementById('homeworkList');
  container.innerHTML = homeworkData.map((h, i) => `
    <article class="announcement fade-up" style="transition-delay: ${i * 0.05}s">
      <header class="announcement-header">
        <h3>${h.title}</h3>
        <time class="date" datetime="${h.date}">${new Date(h.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
      </header>
      <p>${h.text}</p>
    </article>
  `).join('');
}

function renderMembers() {
  const container = document.getElementById('membersGrid');
  container.innerHTML = membersData.map((m, i) => `
    <article class="member-card fade-up" style="transition-delay: ${i * 0.03}s">
      <div class="photo" aria-hidden="true">${m.photo ? `<img src="${m.photo}" alt="">` : m.name}</div>
      <div class="info">
        <div class="name">${i + 1}. ${m.name}</div>
        <div class="role" data-translate="${m.roleKey}">${t(m.roleKey)}</div>
        <a href="members-profile/${encodeURIComponent(m.name)}/index.html" class="member-view-btn"><span>View</span></a>
      </div>
    </article>
  `).join('');
}

function renderMemory() {
  const container = document.getElementById('memoryGrid');
  container.innerHTML = memoryData.map((m, i) => `
    <article class="memory-card fade-up" style="transition-delay: ${i * 0.05}s">
      <div class="memory-photo" aria-hidden="true">${m.photo ? `<img src="${m.photo}" alt="">` : '<svg viewBox="0 0 4 3" class="placeholder-img"><rect fill="#1a1a2e" width="4" height="3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#4a4a6a" font-family="Space Grotesk" font-size="0.3">Photo</text></svg>'}</div>
      <div class="memory-info">
        <div class="memory-caption">${m.caption}</div>
        <time class="memory-date" datetime="${m.date}">${new Date(m.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
      </div>
    </article>
  `).join('');
}

function updateStaticText() {
  // Nav links
  document.querySelectorAll('.nav-links a').forEach(a => {
    const key = a.dataset.id;
    if (key && translations[key]) {
      a.textContent = t(key);
    }
  });

  // Section headers and other static text
  document.querySelectorAll('[data-translate-static]').forEach(el => {
    const key = el.dataset.translateStatic;
    if (translations[key]) {
      el.textContent = t(key);
    }
  });

  // All translatable elements
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.dataset.translate;
    if (translations[key]) {
      el.textContent = t(key);
    }
  });
}

function setLastUpdated() {
  const el = document.getElementById('lastUpdated');
  if (el && el.textContent.includes('EDIT ME')) {
    el.textContent = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

// ===== LANGUAGE TOGGLE =====
function initLangToggle() {
  const toggle = document.getElementById('langToggle');
  toggle.dataset.lang = currentLang;

  toggle.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    toggle.dataset.lang = currentLang;
    updateStaticText();

    // Re-render dynamic content
    renderOrgChart();
    renderRules();
    renderSchedule();
    renderTeachers();
    renderCleaning();
    renderMembers();

    // Re-init scroll animations for new elements
    initScrollAnimations();
  });
}

// ===== INTERACTIONS =====
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const wrap = document.getElementById('navLinksWrap');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = wrap.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    wrap.classList.remove('open');
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

  // Observe section headers
  const headerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        headerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });
  document.querySelectorAll('.section-header').forEach(el => headerObserver.observe(el));
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
  renderTeachers();
  renderCleaning();
  renderHomework();
  renderMembers();
  renderMemory();
  setLastUpdated();
  initLangToggle();
  initNavToggle();
  initActiveNav();
  initScrollTop();
  initScrollAnimations();
  initSmoothScrollFallback();
});
