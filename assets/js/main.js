/* Terjemahan dinamis mengikuti kamus terpusat; Indonesia menjadi fallback. */
const t = text => window.I18N ? window.I18N.t(text) : text;
/* 01. KONFIGURASI PROFIL — isi data asli Anda di sini.
   Biarkan kosong bila belum tersedia. cvPage memakai path relatif agar dapat dibuka langsung secara lokal.
   Contoh: email: 'nama@example.com', whatsapp: '6281234567890'. */
const CONFIG = {
  email: 'ndroys@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sandrian/', // URL lengkap https://www.linkedin.com/in/...
  whatsapp: '62895412924097', // Nomor internasional, angka saja, tanpa tanda +.
  cvPage: 'assets/cv/cv.html', // Halaman CV lokal, lalu simpan PDF melalui browser.
};

/* 02. DETAIL AREA KERJA — pola per bagian: Konteks → Yang Saya Kerjakan → Dampak.
   Sesuaikan isinya dengan pekerjaan nyata; hindari angka yang belum terverifikasi. */
const PROJECTS = {
  network: {
    title: 'Pengelolaan Infrastruktur Jaringan',
    description: 'Pengelolaan dan pemeliharaan LAN, WAN, serta Wi-Fi untuk mendukung konektivitas operasional.',
    technology: 'MikroTik RouterOS, routing, NAT, firewall, DHCP/DNS; VPN dan multi-WAN sesuai penerapan.',
    sections: [
      { title: 'Konteks', content: 'Konektivitas jaringan mendukung akses pengguna ke layanan dan kebutuhan operasional sehari-hari.' },
      { title: 'Lingkup Teknis', content: 'Pemeriksaan konfigurasi router, routing, NAT, firewall, DHCP/DNS, serta penelusuran gangguan dari gateway hingga perangkat pengguna. VPN dan failover multi-WAN diperiksa apabila diterapkan; keberhasilan perpindahan jalur perlu diverifikasi melalui pengujian.' },
      { title: 'Manfaat Operasional', content: 'Pengelolaan konfigurasi dan pengujian koneksi membantu menjaga keteraturan jaringan serta mendukung penelusuran gangguan. Tidak diasumsikan bahwa koneksi tetap tersedia saat gangguan ISP tanpa hasil pengujian.' },
    ],
  },
  monitoring: {
    title: 'Pemantauan Infrastruktur IT',
    description: 'Pemantauan kondisi server, perangkat jaringan, dan layanan sebagai dasar pemeriksaan gangguan.',
    technology: 'Zabbix, Uptime Kuma; SNMP, ICMP, dan notifikasi sesuai konfigurasi.',
    sections: [
      { title: 'Konteks', content: 'Informasi ketersediaan perangkat dan layanan membantu menentukan kebutuhan pemeriksaan serta tindak lanjut operasional.' },
      { title: 'Lingkup Teknis', content: 'Pemeriksaan host, ketersediaan layanan, latensi, serta ambang batas yang relevan. SNMP, ICMP, dan pengiriman notifikasi digunakan jika dikonfigurasi. Verifikasi meliputi pembaruan data pemantauan dan pengujian notifikasi apabila diterapkan.' },
      { title: 'Manfaat Operasional', content: 'Pemantauan terpusat membantu menyediakan gambaran kondisi layanan dan data untuk penelusuran gangguan, tanpa mengklaim waktu deteksi atau pemulihan yang belum diukur.' },
    ],
  },
  virtualization: {
    title: 'Virtualisasi Server dan Pencadangan',
    description: 'Pengelolaan lingkungan virtualisasi Proxmox VE, mesin virtual, dan sumber daya server.',
    technology: 'Proxmox VE, mesin virtual, jaringan virtual, pencadangan dan pemulihan sesuai penerapan.',
    sections: [
      { title: 'Konteks', content: 'Lingkungan virtualisasi memerlukan pengelolaan mesin virtual, kapasitas host, penyimpanan, dan konektivitas layanan.' },
      { title: 'Lingkup Teknis', content: 'Pemeriksaan status host dan mesin virtual, alokasi CPU/RAM, kapasitas penyimpanan, dan jaringan virtual. Jadwal pencadangan, retensi, lokasi penyimpanan, serta riwayat pengujian pemulihan perlu dikonfirmasi; keberhasilan pemulihan tidak diasumsikan.' },
      { title: 'Manfaat Operasional', content: 'Administrasi terpusat membantu menata mesin virtual dan sumber daya. Kebutuhan perangkat keras tetap bergantung pada kapasitas; kesiapan cadangan untuk pemulihan hanya dapat dipastikan setelah pengujian.' },
    ],
  },
  voip: {
    title: 'Pengelolaan Infrastruktur VoIP',
    description: 'Menjaga layanan telepon berbasis IP tetap berjalan untuk komunikasi internal dan eksternal perusahaan.',
    technology: 'Asterisk, Issabel PBX, SIP trunk; IVR dan antrean panggilan sesuai penerapan.',
    sections: [
      { title: 'Konteks', content: 'Sistem IPPBX mendukung kebutuhan komunikasi internal dan eksternal melalui perangkat telepon berbasis IP.' },
      { title: 'Lingkup Teknis', content: 'Pengelolaan ekstensi, SIP trunk, alur panggilan, dan penelusuran gangguan audio melalui pemeriksaan registrasi SIP, NAT/firewall, serta jaringan. Pemeriksaan IVR dan antrean disesuaikan dengan fitur yang digunakan. Verifikasi mencakup panggilan masuk/keluar dan audio dua arah.' },
      { title: 'Manfaat Operasional', content: 'Pemeliharaan dan pemeriksaan yang terarah mendukung operasional komunikasi. Hasil kualitas audio serta distribusi panggilan perlu dibuktikan melalui pengujian sesuai konfigurasi.' },
    ],
  },
};

/* 03. MENU MOBILE — sinkronkan tampilan dan atribut aksesibilitas. */
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', t('Buka menu'));
}
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', t(isOpen ? 'Tutup menu' : 'Buka menu'));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => { if (!event.target.closest('.nav-wrap')) closeMenu(); });
window.matchMedia('(min-width: 961px)').addEventListener('change', closeMenu);

/* 04. NAVIGASI AKTIF — gunakan posisi section, termasuk ketika mendekati footer. */
const navLinks = [...nav.querySelectorAll('a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
let scrollQueued = false;
function updateActiveSection() {
  let active = sections[0];
  sections.forEach(section => { if (section.getBoundingClientRect().top <= 145) active = section; });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) active = sections[sections.length - 1];
  navLinks.forEach(link => {
    const selected = link.getAttribute('href') === `#${active.id}`;
    link.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateActiveSection); }
}, { passive: true });
window.addEventListener('resize', updateActiveSection);
updateActiveSection();

/* 05. KONTAK — jangan membuat tautan seolah aktif sebelum datanya diisi. */
const contacts = {
  email: { valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email), url: `mailto:${CONFIG.email}`, label: CONFIG.email },
  linkedin: { valid: /^https:\/\/(www\.)?linkedin\.com\/in\/[^\s]+$/i.test(CONFIG.linkedin), url: CONFIG.linkedin, label: t('Lihat profil LinkedIn') },
  whatsapp: { valid: /^\d{8,15}$/.test(CONFIG.whatsapp), url: `https://wa.me/${CONFIG.whatsapp}`, label: formatPhone(CONFIG.whatsapp) },
};
/* Tampilkan nomor dengan pemisah agar mudah dibaca; href tetap angka murni. */
function formatPhone(digits) {
  const m = digits.match(/^(62)(\d{3})(\d{4})(\d+)$/);
  return m ? `+${m[1]} ${m[2]}-${m[3]}-${m[4]}` : `+${digits}`;
}
document.querySelectorAll('[data-contact]').forEach(link => {
  const contact = contacts[link.dataset.contact];
  if (contact.valid) {
    link.href = contact.url;
    link.querySelector('small').textContent = contact.label;
    if (link.dataset.contact !== 'email') { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  } else {
    link.removeAttribute('href');
    link.setAttribute('aria-disabled', 'true');
  }
});

/* 06. CV LOKAL — navigasi biasa bekerja pada file:// maupun Live Server.
   Tidak memakai atribut download karena tujuan berupa halaman HTML cetak.
   Tautan HTML juga tetap bekerja ketika JavaScript tidak aktif. */
const cvLinks = [...document.querySelectorAll('.cv-link')];
cvLinks.forEach(link => {
  link.href = CONFIG.cvPage;
  link.removeAttribute('download');
  link.removeAttribute('aria-disabled');
  link.setAttribute('aria-describedby', 'cv-status');
});
document.querySelector('#cv-status').textContent = t('Membuka CV format A4; simpan sebagai PDF melalui menu Cetak browser.');
/* 07. DIALOG DETAIL — native dialog mendukung keyboard dan pengembalian fokus. */
const dialog = document.querySelector('#project-dialog');
let activeProject = null;
function renderProject(key) {
  const project = PROJECTS[key];
  document.querySelector('#dialog-title').textContent = t(project.title);
  document.querySelector('#dialog-description').textContent = t(project.description);
  const details = document.querySelector('#dialog-sections');
  details.replaceChildren();
  project.sections.forEach(section => {
    const heading = document.createElement('h3');
    heading.textContent = t(section.title);
    const paragraph = document.createElement('p');
    paragraph.textContent = t(section.content);
    details.append(heading, paragraph);
  });
  document.querySelector('#dialog-technology').textContent = t(project.technology);
}
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    activeProject = button.dataset.project;
    renderProject(activeProject);
    dialog.scrollTop = 0;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.addEventListener('languagechange', () => {
  if (activeProject && dialog.open) renderProject(activeProject);
  document.querySelector('#cv-status').textContent = t('Membuka CV format A4; simpan sebagai PDF melalui menu Cetak browser.');
  const linkedin = document.querySelector('[data-contact="linkedin"] small');
  if (linkedin && contacts.linkedin.valid) linkedin.textContent = t('Lihat profil LinkedIn');
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
});

/* 08. FOOTER — tahun mengikuti perangkat pengunjung. */
document.querySelector('#year').textContent = new Date().getFullYear();
