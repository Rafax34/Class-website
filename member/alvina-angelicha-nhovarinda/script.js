/* ============================================================
   Class X-D Member Profile — subtle animation layer
   Vanilla JS only. transform/opacity only (GPU-friendly).
   All cursor-driven effects gated to fine pointers; all motion
   respects prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // rAF-throttled handler factory (avoid per-event layout churn)
  function onFrame(fn) {
    var ticking = false;
    return function (ev) {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        fn(ev);
      });
    };
  }

  // ---------- Split hero name into letters (with stagger) ----------
  function splitName() {
    var el = document.querySelector('.hero__name');
    if (!el || reduce) return;
    var text = el.textContent.trim();
    if (!text) return;

    el.setAttribute('aria-label', text);
    el.classList.add('hero__name--split');
    el.textContent = '';

    for (var i = 0; i < text.length; i++) {
      var ch = document.createElement('span');
      ch.className = 'char';
      ch.setAttribute('aria-hidden', 'true');
      ch.textContent = text[i] === ' ' ? ' ' : text[i];
      ch.style.transitionDelay = (i * 22) + 'ms';
      el.appendChild(ch);
    }
  }

  // ---------- Scroll progress bar ----------
  function initProgress() {
    var bar = document.createElement('div');
    bar.className = 'progress';
    document.body.appendChild(bar);

    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = 'scaleX(' + p + ')';
    }
    window.addEventListener('scroll', onFrame(update), { passive: true });
    update();
  }

  // ---------- Ambient cursor glow (desktop only) ----------
  function initGlow() {
    if (!fine || reduce) return;
    var glow = document.createElement('div');
    glow.className = 'glow';
    document.body.appendChild(glow);

    document.addEventListener('mousemove', onFrame(function (ev) {
      glow.style.transform = 'translate(' + ev.clientX + 'px,' + ev.clientY + 'px)';
    }), { passive: true });
    document.addEventListener('mouseenter', function () {
      document.body.classList.add('glow-on');
    });
    document.body.classList.add('glow-on');
    glow.style.opacity = 1;
    setTimeout(function () { document.body.classList.add('glow-on'); }, 0);
  }

  // ---------- Card spotlight (desktop only) ----------
  function initSpotlight() {
    if (!fine || reduce) return;
    var cards = document.querySelectorAll('.overview__card, .contribution-card, .project-card');
    [].forEach.call(cards, function (card) {
      var spot = document.createElement('span');
      spot.className = 'spot';
      card.appendChild(spot);

      card.addEventListener('mouseenter', function () { spot.classList.add('on'); });
      card.addEventListener('mouseleave', function () { spot.classList.remove('on'); });
      card.addEventListener('mousemove', onFrame(function (ev) {
        var r = card.getBoundingClientRect();
        spot.style.transform = 'translate(' + (ev.clientX - r.left) + 'px,' + (ev.clientY - r.top) + 'px)';
      }), { passive: true });
    });
  }

  // ---------- Hero 3D tilt (desktop only) ----------
  function initTilt() {
    if (!fine || reduce) return;
    var hero = document.querySelector('.hero');
    var wrap = document.querySelector('.hero__avatar-wrap');
    if (!hero || !wrap) return;

    hero.addEventListener('mousemove', onFrame(function (ev) {
      var r = hero.getBoundingClientRect();
      var px = (ev.clientX - r.left) / r.width - 0.5; // -0.5..0.5
      var py = (ev.clientY - r.top) / r.height - 0.5;
      wrap.style.transform =
        'rotateX(' + (-py * 6).toFixed(2) + 'deg) ' +
        'rotateY(' + (px * 6).toFixed(2) + 'deg)';
    }), { passive: true });
    hero.addEventListener('mouseleave', function () {
      wrap.style.transform = '';
    });
  }

  // ---------- Magnetic buttons (desktop only) ----------
  function initMagnetic() {
    if (!fine || reduce) return;
    var max = 6;
    var els = document.querySelectorAll('.header__back, .member-nav__link');
    [].forEach.call(els, function (el) {
      el.addEventListener('mousemove', onFrame(function (ev) {
        var r = el.getBoundingClientRect();
        var dx = ev.clientX - (r.left + r.width / 2);
        var dy = ev.clientY - (r.top + r.height / 2);
        var d = Math.max(Math.sqrt(dx * dx + dy * dy), 0.001);
        var m = Math.min(max, d);
        el.style.transform =
          'translate(' + (dx / d * m).toFixed(1) + 'px,' + (dy / d * m).toFixed(1) + 'px)';
      }), { passive: true });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }

  // ---------- Subtle scroll-driven hero parallax ----------
  function initParallax() {
    if (reduce) return;
    var hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', onFrame(function () {
      var y = Math.min(window.scrollY * 0.03, 40);
      hero.style.transform = 'translateY(' + y.toFixed(1) + 'px)';
    }), { passive: true });
  }

  // ---------- Page transition on member navigation ----------
  function initPageTransition() {
    if (reduce) return;
    var links = document.querySelectorAll('.member-nav__link');
    [].forEach.call(links, function (link) {
      link.addEventListener('click', function (ev) {
        var href = link.getAttribute('href');
        if (!href || href === '#') return;
        ev.preventDefault();
        document.body.classList.add('page-exit');
        setTimeout(function () { window.location.href = href; }, 240);
      });
    });
  }

  // ---------- Scroll reveal (IntersectionObserver + stagger) ----------
  function initReveal() {
    var blocks = document.querySelectorAll('.reveal');
    var rows = document.querySelectorAll('.overview__grid, .contributions__grid, .projects__list, .member-nav');

    if (!('IntersectionObserver' in window)) {
      [].forEach.call(blocks, function (el) { el.classList.add('reveal-visible'); });
      [].forEach.call(rows, function (el) { el.classList.add('in-view'); });
      return;
    }

    var blockObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          blockObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    var rowObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          rowObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    [].forEach.call(blocks, function (el) { blockObs.observe(el); });
    [].forEach.call(rows, function (el) { rowObs.observe(el); });
  }

  // ---------- Boot ----------
  function boot() {
    splitName();
    initProgress();
    initGlow();
    initSpotlight();
    initTilt();
    initMagnetic();
    initParallax();
    initPageTransition();
    initReveal();
    requestAnimationFrame(function () { document.body.classList.add('loaded'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
