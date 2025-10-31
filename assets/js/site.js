(function () {
  const THEME_KEY = 'theme';

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return applyTheme(saved);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  function initToggle() {
    const btn = document.querySelector('[data-toggle-theme]');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  function initRotatingTagline() {
    const el = document.getElementById('rotating-tagline');
    if (!el) return;
    let phrases = [];
    try { phrases = JSON.parse(el.dataset.phrases || '[]'); } catch (e) {}
    if (!phrases.length) return;
    let i = 0;
    setInterval(() => {
      i = (i + 1) % phrases.length;
      el.textContent = phrases[i];
    }, 3000);
  }

  function initPubSearch() {
    // Optional: if a search input with id #pub-search exists, filter items with [data-pub]
    const input = document.getElementById('pub-search');
    if (!input) return;
    const items = Array.from(document.querySelectorAll('[data-pub]'));
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      items.forEach((it) => {
        const hit = it.textContent.toLowerCase().includes(q);
        it.style.display = hit ? '' : 'none';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initToggle();
    initReveal();
    initRotatingTagline();
    initPubSearch();
  });
})();
