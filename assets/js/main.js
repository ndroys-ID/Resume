/* 01. KONFIGURASI PROFIL — isi data asli Anda di sini.
   Biarkan kosong bila belum tersedia. cvPage memakai path relatif agar dapat dibuka langsung secara lokal.
   Contoh: email: 'nama@example.com', whatsapp: '6281234567890'. */
const CONFIG = {
  email: 'ndroys@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sandrian/', // URL lengkap https://www.linkedin.com/in/...
  whatsapp: '62895412924097', // Nomor internasional, angka saja, tanpa tanda +.
  cvPage: 'assets/cv/cv.html', // Halaman CV lokal, lalu simpan PDF melalui browser.
};

/* 02. DETAIL PROYEK — title, description, dan technology tetap dipertahankan.
   sections berisi judul dan isi setiap bagian. Konfigurasi yang belum diketahui
   dijelaskan secara bersyarat, tanpa mengklaim implementasi atau hasil pengujian. */
const PROJECTS = {
  network: {
    title: 'Pengelolaan Infrastruktur Jaringan',
    description: 'Pengelolaan dan pemeliharaan infrastruktur jaringan untuk mendukung konektivitas serta kebutuhan operasional IT.',
    technology: 'MikroTik RouterOS, routing, firewall, LAN/WAN.',
    sections: [
      { title: 'Lingkup Pekerjaan', content: 'Mencakup pengelolaan LAN/WAN, routing, DHCP, DNS, NAT, firewall, serta penelusuran gangguan konektivitas sesuai kebutuhan jaringan. Pengelolaan multi-WAN termasuk dalam lingkup apabila digunakan pada lingkungan terkait.' },
      { title: 'Pendekatan Teknis', content: 'Pemeriksaan dilakukan pada konfigurasi router, tabel routing, aturan firewall, dan konektivitas antarjaringan. Pengujian koneksi digunakan untuk menelusuri sumber gangguan sebelum penyesuaian konfigurasi dilakukan sesuai kebutuhan.' },
      { title: 'Verifikasi', content: 'Verifikasi mencakup pemeriksaan keterjangkauan gateway, kesesuaian jalur routing, resolusi DNS, konektivitas antarjaringan, serta akses ke layanan yang dibutuhkan. Hasil pemeriksaan menjadi dasar penentuan tindak lanjut.' },
      { title: 'Hasil dan Manfaat', content: 'Pendekatan ini membantu menjaga keteraturan konfigurasi jaringan dan memudahkan penelusuran gangguan konektivitas. Manfaat operasional yang dituju adalah akses jaringan yang mendukung pekerjaan pengguna; tidak ada klaim peningkatan kinerja atau hasil pengujian tertentu.' },
    ],
  },
  monitoring: {
    title: 'Pemantauan Infrastruktur IT',
    description: 'Pemantauan ketersediaan server, perangkat jaringan, dan layanan untuk membantu mengenali kondisi operasional serta gangguan yang memerlukan pemeriksaan.',
    technology: 'Zabbix dan Uptime Kuma; SNMP atau ICMP sesuai dukungan perangkat dan kebutuhan pemeriksaan.',
    sections: [
      { title: 'Lingkup Pekerjaan', content: 'Mencakup pemantauan perangkat atau host, ketersediaan layanan, status koneksi, dan metrik yang relevan dengan kebutuhan operasional. Jenis pemeriksaan disesuaikan dengan perangkat, layanan, dan akses yang tersedia.' },
      { title: 'Konfigurasi Pemantauan', content: 'Konfigurasi meliputi pendaftaran host, penentuan item atau pemeriksaan layanan, aturan pemicu peringatan, ambang batas, dan tampilan ringkasan pemantauan sesuai kebutuhan. SNMP, ICMP, serta notifikasi digunakan apabila didukung dan memang dikonfigurasi; penerapan masing-masing perlu dikonfirmasi pada lingkungan terkait.' },
      { title: 'Penanganan Insiden', content: 'Penanganan diawali dengan identifikasi peringatan dan pemeriksaan kondisi perangkat atau layanan. Penelusuran gangguan mempertimbangkan konektivitas, kondisi sistem, dan informasi pemantauan. Setelah tindakan pemulihan, kondisi layanan dipantau kembali untuk menentukan apakah gangguan masih terjadi.' },
      { title: 'Verifikasi', content: 'Pemeriksaan mencakup status host, pembaruan data, dan kesesuaian hasil pemeriksaan layanan. Apabila notifikasi diterapkan, alur pengirimannya perlu diuji sesuai aturan pemicu dan tujuan yang dikonfigurasi. Keberhasilan pengujian tidak diasumsikan tanpa bukti pemeriksaan.' },
      { title: 'Hasil dan Manfaat', content: 'Pemantauan terpusat membantu menyediakan gambaran kondisi perangkat dan layanan serta mendukung identifikasi gangguan untuk tindak lanjut. Tidak ada klaim statistik ketersediaan layanan atau kecepatan deteksi yang belum terverifikasi.' },
    ],
  },
  virtualization: {
    title: 'Virtualisasi Server dan Pencadangan',
    description: 'Pengelolaan lingkungan virtualisasi server dengan Proxmox VE untuk menata mesin virtual dan kebutuhan sumber daya dalam satu lingkungan administrasi.',
    technology: 'Proxmox VE, mesin virtual, jaringan virtual, serta pencadangan dan pemulihan sesuai penerapan.',
    sections: [
      { title: 'Lingkup Pekerjaan', content: 'Mencakup pengelolaan host virtualisasi, mesin virtual, alokasi sumber daya, penyimpanan, dan jaringan virtual. Pencadangan menjadi bagian dari lingkup apabila mekanismenya telah diterapkan pada lingkungan terkait.' },
      { title: 'Pendekatan Teknis', content: 'Pemeriksaan mencakup status host dan mesin virtual, penggunaan CPU, RAM, kapasitas penyimpanan, serta konfigurasi jaringan virtual. Pengelolaan dilakukan berdasarkan kebutuhan layanan dan kapasitas yang tersedia, termasuk pemeriksaan tugas pencadangan apabila digunakan.' },
      { title: 'Pencadangan dan Pemulihan', content: 'Jadwal pencadangan, masa retensi, lokasi penyimpanan, serta riwayat pengujian pemulihan belum dikonfirmasi. Secara umum, pengaturannya perlu disesuaikan dengan kebutuhan layanan dan kapasitas penyimpanan. Pengujian pemulihan perlu dilakukan pada lingkungan yang sesuai sebelum cadangan dinyatakan dapat digunakan.' },
      { title: 'Verifikasi', content: 'Verifikasi mencakup status mesin virtual, penggunaan sumber daya host, konektivitas jaringan virtual, dan akses layanan. Jika pencadangan diterapkan, status tugas serta ketersediaan berkas cadangan perlu diperiksa. Hasil pemulihan hanya dapat dinyatakan setelah pengujian dan pemeriksaan layanan dilakukan.' },
      { title: 'Hasil dan Manfaat', content: 'Pengelolaan server secara terpusat membantu memudahkan administrasi mesin virtual dan pemantauan sumber daya. Pencadangan yang dikelola dan diuji dapat mendukung kesiapan pemulihan, tanpa mengasumsikan keberhasilan pemulihan atau waktu pemulihan tertentu.' },
    ],
  },
  voip: {
    title: 'Pengelolaan Infrastruktur VoIP',
    description: 'Pengelolaan dan pemeliharaan infrastruktur telepon berbasis IP untuk mendukung layanan komunikasi internal serta eksternal.',
    technology: 'Asterisk, Issabel PBX, SIP, serta IVR dan antrean panggilan sesuai konfigurasi yang diterapkan.',
    sections: [
      { title: 'Lingkup Pekerjaan', content: 'Mencakup pengelolaan ekstensi, SIP trunk, perutean panggilan masuk dan keluar, registrasi perangkat telepon, serta penelusuran gangguan panggilan. IVR dan antrean panggilan termasuk dalam lingkup apabila digunakan pada sistem terkait.' },
      { title: 'Pendekatan Teknis', content: 'Pemeriksaan mencakup status layanan PBX, konektivitas SIP, registrasi perangkat, alur panggilan, catatan kejadian sistem, serta konektivitas jaringan. Penyesuaian konfigurasi dilakukan berdasarkan hasil pemeriksaan dan kebutuhan komunikasi.' },
      { title: 'Penelusuran Gangguan', content: 'Investigasi dapat mencakup panggilan gagal, audio satu arah, tidak adanya suara, penurunan kualitas audio, dan distribusi panggilan yang tidak sesuai. Pemeriksaan diarahkan pada registrasi SIP, perutean panggilan, NAT, firewall, kondisi jaringan, serta aturan antrean jika diterapkan.' },
      { title: 'Verifikasi', content: 'Verifikasi dilakukan melalui pemeriksaan registrasi ekstensi, status layanan, serta pengujian panggilan masuk dan keluar sesuai lingkup pekerjaan. Jalur panggilan dan audio dua arah diperiksa; IVR serta distribusi antrean diuji apabila fitur tersebut digunakan. Hasil pengujian perlu dicatat sebelum layanan dinyatakan sesuai.' },
      { title: 'Hasil dan Manfaat', content: 'Pendekatan ini mendukung pemeliharaan layanan komunikasi dan membantu penelusuran gangguan secara terarah. Tidak ada klaim peningkatan kualitas, keberhasilan panggilan, atau hasil operasional tertentu tanpa verifikasi.' },
    ],
  },
};

/* 03. MENU MOBILE — sinkronkan tampilan dan atribut aksesibilitas. */
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Buka menu');
}
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
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
  linkedin: { valid: /^https:\/\/(www\.)?linkedin\.com\/in\/[^\s]+$/i.test(CONFIG.linkedin), url: CONFIG.linkedin, label: 'Lihat profil LinkedIn' },
  whatsapp: { valid: /^\d{8,15}$/.test(CONFIG.whatsapp), url: `https://wa.me/${CONFIG.whatsapp}`, label: `+${CONFIG.whatsapp}` },
};
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
document.querySelector('#cv-status').textContent = 'Buka CV A4, lalu pilih Cetak / Simpan sebagai PDF.';
/* 07. DIALOG DETAIL — native dialog mendukung keyboard dan pengembalian fokus. */
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = PROJECTS[button.dataset.project];
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-description').textContent = project.description;
    // Buat konten sebagai teks agar perubahan data tidak menyisipkan HTML.
    const details = document.querySelector('#dialog-sections');
    details.replaceChildren();
    project.sections.forEach(section => {
      const heading = document.createElement('h3');
      heading.textContent = section.title;
      const paragraph = document.createElement('p');
      paragraph.textContent = section.content;
      details.append(heading, paragraph);
    });
    document.querySelector('#dialog-technology').textContent = project.technology;
    dialog.scrollTop = 0;
    dialog.showModal();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
});

/* 08. FOOTER — tahun mengikuti perangkat pengunjung. */
document.querySelector('#year').textContent = new Date().getFullYear();
