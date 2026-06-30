/* =========================================================
   Luxmed — Prosthetic Leg landing — vanilla JS
   ========================================================= */
(function () {
  'use strict';

  /* ---- 1) Hero tam ekran video: cihaza göre kaynak ---- */
  var mqDesktop = window.matchMedia('(min-width: 920px)');
  var heroVideo = document.getElementById('heroVideo');

  function loadHeroVideo() {
    if (!heroVideo) return;
    var desktop = mqDesktop.matches;
    var src = desktop ? 'assets/video/hero-pc.mp4' : 'assets/video/hero-mobile.mp4';
    var poster = desktop ? 'assets/video/hero-pc-poster.jpg' : 'assets/video/hero-mobile-poster.jpg';
    if (heroVideo.getAttribute('data-current') === src) return;
    heroVideo.setAttribute('data-current', src);
    heroVideo.setAttribute('poster', poster);
    heroVideo.src = src;
    var p = heroVideo.play();
    if (p && p.catch) p.catch(function () {});
  }
  loadHeroVideo();
  if (mqDesktop.addEventListener) mqDesktop.addEventListener('change', loadHeroVideo);
  else if (mqDesktop.addListener) mqDesktop.addListener(loadHeroVideo);

  /* ---- 2) Header: hero üzerinde şeffaf → kaydırınca opak ---- */
  var header = document.querySelector('.header');
  var hero = document.querySelector('.hero');
  function onScroll() {
    if (!header) return;
    var threshold = hero ? hero.offsetHeight - 90 : 160;
    header.classList.toggle('is-scrolled', window.scrollY > threshold);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  /* ---- 3) Scroll-reveal ---- */
  var reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveals.length) {
    var ro = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- 4) Diğer videolar (silikon) görünürken yükle ---- */
  var lazyVideos = document.querySelectorAll('[data-lazyvideo]');
  if ('IntersectionObserver' in window && lazyVideos.length) {
    var vo = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var v = en.target;
        if (!v.src) { v.src = v.getAttribute('data-lazyvideo'); var pl = v.play(); if (pl && pl.catch) pl.catch(function(){}); }
        obs.unobserve(v);
      });
    }, { rootMargin: '200px' });
    lazyVideos.forEach(function (v) { vo.observe(v); });
  } else {
    lazyVideos.forEach(function (v) { v.src = v.getAttribute('data-lazyvideo'); });
  }

  /* ---- 5) Dönüşüm izleme iskeleti ---- */
  function track(eventName) {
    if (typeof window.gtag === 'function') window.gtag('event', eventName, { event_category: 'lead' });
    if (typeof window.fbq === 'function') window.fbq('trackCustom', eventName);
    if (window.console) console.log('[track]', eventName);
  }
  window.luxTrack = track;
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-track]');
    if (el && el.tagName !== 'BUTTON') track(el.getAttribute('data-track'));
  });

  /* ---- 6) Lead form (Web3Forms) ---- */
  var form = document.getElementById('quoteForm');
  var formWrap = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      track('lead_form_submit');
      var btn = form.querySelector('button[type="submit"]');
      var key = form.querySelector('[name="access_key"]').value;
      var data = Object.fromEntries(new FormData(form).entries());
      function showSuccess() { if (formWrap) { formWrap.classList.add('is-sent'); window.scrollTo({ top: formWrap.offsetTop - 80, behavior: 'smooth' }); } }
      if (!key || key.indexOf('YOUR_') === 0) {
        console.warn('[form] Web3Forms access_key henüz ayarlanmadı — demo mod.');
        showSuccess(); return;
      }
      btn.disabled = true; btn.textContent = 'Gönderiliyor…';
      fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      }).then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) showSuccess();
          else { alert('Bir sorun oluştu. Lütfen WhatsApp’tan yazın.'); btn.disabled = false; btn.textContent = 'Ücretsiz teklifimi gönder'; }
        })
        .catch(function () { alert('Bağlantı hatası. Lütfen WhatsApp’tan yazın.'); btn.disabled = false; btn.textContent = 'Ücretsiz teklifimi gönder'; });
    });
  }

  /* ---- 7) Yıl + Instagram embed ---- */
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  if (document.querySelector('.instagram-media')) {
    var s = document.createElement('script');
    s.async = true; s.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(s);
  }
})();
