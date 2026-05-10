---
layout: default
title: Six-Month Follow-Up Survey
parent: Surveys
nav_order: 2
nav_exclude: true
sitemap: false
permalink: /surveys/six-month/
---

# Six-Month Follow-Up Survey

Paste your live form URL below (or pass it via `?url=`). The QR updates instantly.

<div class="qr-wrap" style="margin:1rem 0;padding:1rem;border:1px solid #E5E7EB;border-radius:12px;">
  <label for="url" style="font-weight:600;">Destination (Form URL)</label>
  <input id="url" type="url" placeholder="https://forms.gle/REPLACE_SIX_MONTH" style="width:100%;padding:.6rem;border:1px solid #D1D5DB;border-radius:10px;">
  <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-top:12px;">
    <div class="qr" style="background:#fff;padding:12px;border-radius:12px;border:1px solid #E5E7EB;">
      <img id="qr" alt="QR code" width="300" height="300" src="">
    </div>
    <div class="actions">
      <p><a id="open" class="btn" href="#" target="_blank" rel="noopener" style="display:inline-block;padding:.6rem .9rem;border-radius:10px;border:1px solid #D1D5DB;text-decoration:none;">Open Form</a></p>
      <button id="copy" style="padding:.6rem .9rem;border:1px solid #D1D5DB;border-radius:10px;background:#fff;cursor:pointer;">Copy Link</button>
      <button id="download" style="padding:.6rem .9rem;border:1px solid #D1D5DB;border-radius:10px;background:#fff;cursor:pointer;">Download QR (PNG)</button>
      <p style="color:#6B7280;margin-top:.5rem;">Tip: reuse this page by adding <code>?url=&lt;encoded-form-url&gt;</code> to the address.</p>
    </div>
  </div>
</div>

<script>
(function() {
  const params = new URLSearchParams(location.search);
  const urlInput = document.getElementById('url');
  const openBtn = document.getElementById('open');
  const qrImg = document.getElementById('qr');

  const defaultURL = '';
  const initial = params.get('url') || defaultURL;

  function update() {
    const val = urlInput.value.trim();
    const enc = encodeURIComponent(val);
    const qrURL = `https://chart.googleapis.com/chart?cht=qr&chs=600x600&chl=${enc}&choe=UTF-8`;
    qrImg.src = qrURL;
    openBtn.href = val || '#';
  }

  urlInput.value = initial;
  update();

  urlInput.addEventListener('input', update);

  document.getElementById('copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(urlInput.value.trim()); } catch(e) {}
  });

  document.getElementById('download').addEventListener('click', () => {
    const val = urlInput.value.trim();
    const enc = encodeURIComponent(val);
    const qrURL = `https://chart.googleapis.com/chart?cht=qr&chs=1200x1200&chl=${enc}&choe=UTF-8`;
    const a = document.createElement('a');
    a.href = qrURL;
    a.download = 'six-month-survey-qr.png';
    document.body.appendChild(a); a.click(); a.remove();
  });
})();
</script>
