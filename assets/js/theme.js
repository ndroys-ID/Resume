/* Tema dimuat sebelum CSS untuk mencegah kilatan warna yang salah.
   Penyimpanan dapat dibatasi pada file://; kegagalan tidak menghalangi toggle. */
(() => {
  const root = document.documentElement;
  const key = 'sandrian-theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const stored = localStorage.getItem(key);
    if (stored === 'light' || stored === 'dark') preference = stored;
  } catch { /* Tetap berfungsi tanpa penyimpanan browser. */ }

  function apply(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#222930' : '#203c53';
    const button = document.querySelector('#theme-toggle');
    if (button) {
      const label = dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', String(dark));
    }
  }
  apply(preference || (system.matches ? 'dark' : 'light'));
  system.addEventListener('change', event => {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#theme-toggle');
    if (!button) return;
    button.hidden = false;
    apply(root.dataset.theme);
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(preference);
      try { localStorage.setItem(key, preference); } catch { /* Preferensi tetap aktif selama halaman terbuka. */ }
    });
  });
})();
