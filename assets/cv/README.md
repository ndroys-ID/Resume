# CV lokal Sandrian

## Membuka dan menyimpan PDF

1. Buka C:\Resume\index.html di Edge atau Chrome, atau gunakan Live Server di VS Code.
2. Klik salah satu tombol **Download CV**. Halaman assets/cv/cv.html terbuka di tab yang sama.
3. Klik **Cetak / Simpan sebagai PDF**, atau tekan **Ctrl+P**.
4. Pilih **Simpan sebagai PDF / Save as PDF**, ukuran **A4**, orientasi **Potret**, skala **100%**, dan margin bawaan agar aturan margin CSS dipakai. Nonaktifkan **Header dan footer** agar alamat file lokal tidak ikut tercetak.
5. Periksa pratinjau, lalu simpan dengan nama **CV_Sandrian_ID.pdf atau CV_Sandrian_EN.pdf**. Judul halaman menyarankan nama CV_Sandrian_ID atau CV_Sandrian_EN; browser tetap dapat meminta Anda mengetik nama berkas.
6. Gunakan tautan **Kembali ke portfolio** untuk kembali ke halaman utama.

Tidak memerlukan publikasi, akun, API key, backend, CDN, internet, Node.js, atau Python. Tautan profil/email dalam isi CV hanya akan memakai aplikasi atau internet bila diklik; tidak dibutuhkan untuk mencetak CV.

## File sumber

- cv.html: isi CV Bahasa Indonesia, kontak, pengalaman, keahlian, dan pendidikan. Edit langsung untuk memperbarui CV.
- cv.css: layout satu kolom dan pengaturan cetak A4. Kontrol cetak tidak masuk PDF.
- cv.js: pemanggilan window.print() setelah tombol diklik. Ctrl+P tetap bekerja tanpa JavaScript.
- ../images/Sandrian.jpg: foto asli yang sudah tersedia pada proyek; tidak memakai foto hasil regenerasi.

PDF berisi teks HTML yang dapat dipilih/disalin, heading standar, dan daftar pengalaman berurutan untuk membantu pembacaan ATS. Hasil pemrosesan tetap bergantung pada ATS yang digunakan. Tidak ada grafik kemampuan atau informasi penting yang hanya disimpan sebagai gambar.

CV sengaja ringkas dan tidak memasukkan uraian proyek yang penerapannya masih perlu dikonfirmasi. Hasil pemenggalan halaman dapat berbeda antarbrowser; periksa pratinjau A4 sebelum menyimpan.

## Data yang dapat dilengkapi

Nama yang tersedia hanya **Sandrian**. Jika ini belum nama lengkap, perbarui setelah dikonfirmasi. Domisili serta sertifikasi/pelatihan belum tersedia dan tidak dicantumkan. Kontak, pendidikan, dan pengalaman sudah diambil dari data portfolio yang ada.

CV merupakan sumber terpisah agar bisa dibuka tanpa JavaScript atau pembacaan file lokal lewat fetch. Setelah mengubah profil di portfolio, sesuaikan juga cv.html agar tetap sinkron.

## Pilihan bahasa

Pemilih ID/EN mengubah isi CV tanpa memuat ulang halaman. Tautan dari portfolio membawa ?lang=id atau ?lang=en sehingga bahasa tetap sesuai pada file lokal. Terjemahan Inggris terpusat di ../js/translations.js. Bahasa tidak mengubah desain cetak A4 atau tema terang. Nama PDF yang disarankan mengikuti bahasa aktif; browser tetap meminta konfirmasi nama berkas saat menyimpan.