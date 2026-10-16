/* Terjemahan lokal tanpa fetch atau library. Teks Indonesia dalam HTML menjadi
   fallback; TreeWalker memperbarui text node tanpa mengganti struktur/ikon HTML. */
(() => {
  const dictionary = window.TRANSLATIONS;
  const storageKey = 'sandrian-language';
  const query = new URLSearchParams(location.search).get('lang');
  let language = 'id';
  if (query === 'id' || query === 'en') language = query;
  else {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === 'id' || saved === 'en') language = saved;
    } catch { /* Bahasa default tetap Indonesia saat penyimpanan dibatasi. */ }
  }
  const textSources = new WeakMap();
  const attributeSources = new WeakMap();
  function t(key) { return language === 'en' ? (dictionary[key] || key) : key; }
  window.I18N = { t, get language() { return language; }, setLanguage };
  document.documentElement.lang = language;

  function translateText() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement.closest('script,style,noscript,[data-no-i18n]')) continue;
      if (!textSources.has(node)) {
        const raw = node.nodeValue;
        const key = raw.trim();
        if (!Object.hasOwn(dictionary, key)) continue;
        textSources.set(node, { key, before: raw.match(/^\s*/)[0], after: raw.match(/\s*$/)[0] });
        // Penanda untuk elemen yang hanya berisi satu teks.
        if (node.parentElement.childNodes.length === 1) node.parentElement.dataset.i18n = key;
      }
      const source = textSources.get(node);
      node.nodeValue = source.before + t(source.key) + source.after;
    }
    document.querySelectorAll('[aria-label],[title],img[alt],meta[content]').forEach(element => {
      if (element.matches('#theme-toggle,.menu-toggle')) return; // Label mengikuti status komponen.
      let sources = attributeSources.get(element);
      if (!sources) { sources = {}; attributeSources.set(element, sources); }
      for (const attribute of ['aria-label', 'title', 'alt', 'content']) {
        const value = element.getAttribute(attribute);
        if (!(attribute in sources) && Object.hasOwn(dictionary, value)) sources[attribute] = value;
        if (attribute in sources) element.setAttribute(attribute, t(sources[attribute]));
      }
    });
  }

  function updateControls() {
    document.querySelectorAll('[data-language-switch]').forEach(group => {
      group.setAttribute('aria-label', t('Pilih bahasa'));
      group.querySelectorAll('[data-language]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.language === language));
      });
    });
    const theme = document.querySelector('#theme-toggle');
    if (theme) {
      const label = t(document.documentElement.dataset.theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
      theme.setAttribute('aria-label', label);
      theme.title = label;
    }
    const menu = document.querySelector('.menu-toggle');
    if (menu) menu.setAttribute('aria-label', t(menu.getAttribute('aria-expanded') === 'true' ? 'Tutup menu' : 'Buka menu'));
    document.querySelectorAll('.cv-link').forEach(link => {
      link.href = `assets/cv/cv.html?lang=${language}`;
    });
    const back = document.querySelector('[data-portfolio-link]');
    if (back) back.href = `../../index.html?lang=${language}`;
    if (document.body.dataset.page === 'cv') document.title = `CV_Sandrian_${language.toUpperCase()}`;
  }

  function setLanguage(next, save = true) {
    if (next !== 'id' && next !== 'en') return;
    language = next;
    document.documentElement.lang = language;
    if (save) {
      try { localStorage.setItem(storageKey, language); } catch { /* Bahasa CV dibawa melalui ?lang=. */ }
      // Perbarui parameter URL agar pilihan baru bertahan setelah muat ulang.
      const url = new URL(location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', language);
        try { history.replaceState(null, '', url.href); } catch { /* Sebagian browser membatasi file://. */ }
      }
    }
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
    translateText();
    updateControls();
    const status = document.querySelector('#language-status');
    if (status && save) status.textContent = t(language === 'id' ? 'Bahasa Indonesia dipilih.' : 'Bahasa Inggris dipilih.');
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-language-switch]').forEach(group => {
      group.hidden = false;
      group.querySelectorAll('[data-language]').forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.language));
      });
    });
    setLanguage(language, false);
  });
})();
