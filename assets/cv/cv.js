/* Buka dialog cetak bawaan browser. Tidak ada fetch, CDN, atau layanan eksternal.
   Bahasa aktif menentukan saran nama PDF; nama akhir dipilih pengguna. */
document.querySelector('#print-cv').addEventListener('click', () => {
  const language = window.I18N ? window.I18N.language : 'id';
  document.title = `CV_Sandrian_${language.toUpperCase()}`;
  window.print();
});
