# Sandrian — Online Resume

## Bahasa Indonesia dan Inggris

Gunakan pemilih ID/EN di navbar untuk mengganti seluruh konten dan modal. Default adalah Indonesia; preferensi disimpan terpisah dari tema dengan kunci `sandrian-language`. Kamus ada di `assets/js/translations.js`, pengendali di `assets/js/i18n.js`. Teks Indonesia dalam HTML menjadi fallback tanpa JavaScript.

Tautan Lihat CV membawa parameter `?lang=id` atau `?lang=en`. Bahasa juga dapat diganti pada halaman CV sebelum mencetak. Pilih Simpan sebagai PDF dan gunakan nama `CV_Sandrian_ID.pdf` atau `CV_Sandrian_EN.pdf`. Judul halaman menyarankan nama berkas; nama akhir ditentukan melalui dialog simpan browser. Cetak tetap A4 dengan tema terang, tanpa CDN, backend, atau koneksi internet.

Website statis HTML, CSS, dan JavaScript tanpa dependensi atau proses build. Konten menggunakan data yang diberikan. Kontak dan detail proyek sudah diisi; CV A4 lokal tersedia melalui tombol Download CV. Website belum dipublikasikan dan tidak perlu hosting untuk menyimpan CV sebagai PDF.

## Menjalankan di Windows

Buka folder C:\Resume di VS Code, lalu buka index.html di browser melalui File Explorer. Untuk preview HTTP, gunakan ekstensi Live Server di VS Code dan pilih **Open with Live Server** pada index.html. Node.js, Python, backend, dan database tidak diperlukan.

## Mengedit konten

- **Nama dan jabatan:** cari Sandrian dan IT Infrastructure di index.html. Sesuaikan juga title, metadata, footer, dan favicon bila perlu.
- **Foto:** masukkan foto asli ke assets/images/, kemudian ubah src dan alt pada elemen `.profile-image` di index.html. Foto saat ini menggunakan assets/images/Sandrian-transparent.png. Disarankan foto persegi.
- **Tentang, pengalaman, pendidikan:** edit section about, experience, dan education di index.html. Nama perusahaan ditulis sesuai data yang diberikan; periksa kembali ejaan PT IVONESIA SOLUSI DAT sebelum publikasi.
- **Skill:** edit label pada section skills. Tidak ada persentase kemampuan.
- **Proyek:** edit kartu pada section projects dan objek PROJECTS di assets/js/main.js. Pastikan perubahan tetap berdasarkan lingkup dan hasil yang terverifikasi.
- **Kontak:** isi CONFIG.email, CONFIG.linkedin, dan CONFIG.whatsapp di assets/js/main.js. WhatsApp menggunakan angka internasional, misalnya 62 di awal. Kontak kosong atau tidak valid tetap nonaktif.
- **CV:** buka assets/cv/cv.html melalui tombol Download CV, lalu pilih Cetak / Simpan sebagai PDF. Gunakan A4, Potret, skala 100%, matikan header/footer, dan simpan sebagai CV_Sandrian.pdf. Sumber CV diedit di assets/cv/cv.html; panduan lengkap di assets/cv/README.md.
- **Warna dan layout:** variabel global ada di bagian pertama assets/css/style.css. Font menggunakan sans-serif sistem tanpa unduhan eksternal.

Setiap bagian HTML, CSS, dan JavaScript diberi komentar agar mudah ditemukan. Tahun footer diperbarui otomatis. Tautan memakai path relatif agar kompatibel dengan GitHub Pages pada subfolder repository.

## Publikasi ke GitHub Pages

1. Buat repository GitHub, lalu unggah index.html dan folder assets beserta isinya ke root repository. README.md boleh ikut diunggah.
2. Buka **Settings → Pages** pada repository.
3. Pada **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch tempat file diunggah (biasanya main), pilih **/ (root)**, lalu Save.
5. Setelah proses deployment selesai, buka alamat Pages yang ditampilkan GitHub.
6. Periksa menu mobile, tautan kontak, dan unduhan PDF melalui alamat publik tersebut.

## Checklist pemeriksaan manual

- Uji pada lebar 360px, 768px, dan desktop: kartu menyesuaikan, teks terbaca, tanpa overflow horizontal.
- Uji menu hamburger, penutupan dengan Escape, dan navigasi antarbagian.
- Scroll halaman untuk memastikan menu aktif mengikuti bagian yang terlihat.
- Buka semua View Details, lalu tutup dengan tombol, Escape, dan klik area luar.
- Gunakan Tab untuk memeriksa fokus dan tautan lewati ke konten.
- Aktifkan reduced motion di perangkat: smooth scrolling dan transisi dinonaktifkan.
- Setelah mengisi kontak/CV, uji tautan dan file aslinya. Placeholder tidak mengirim pesan atau mengklaim unduhan tersedia.

## Tema terang dan gelap

Klik ikon bulan/matahari pada navbar untuk mengganti tema. Pilihan disimpan di localStorage bila diizinkan browser. Saat belum ada pilihan, tema mengikuti sistem. Bila penyimpanan dibatasi pada file lokal, tombol tetap bekerja selama halaman terbuka. Palet berada di assets/css/theme.css dan logika awal di assets/js/theme.js. Halaman CV dan cetak PDF tetap terang; stylesheet tema hanya dimuat di portfolio.
