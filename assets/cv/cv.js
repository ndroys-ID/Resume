/* Buka dialog cetak bawaan browser. Tidak ada fetch, CDN, atau layanan eksternal.
   Judul CV_Sandrian menjadi saran nama PDF; nama akhir tetap dipilih pengguna. */
document.querySelector('#print-cv').addEventListener('click', () => {
  document.title = 'CV_Sandrian';
  window.print();
});
