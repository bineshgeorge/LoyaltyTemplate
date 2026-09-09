/* Shared behaviour for the partner portal. Loads after bootstrap.bundle. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero carousel: any .hero with .hero-slide children
  var hero = document.querySelector('.hero');
  if (hero) {
    var slides = hero.querySelectorAll('.hero-slide');
    var dots = hero.querySelectorAll('[data-hero-dots] button');
    var index = 0, timer;

    var show = function (n) {
      index = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('active', k === index); });
      dots.forEach(function (d, k) { d.classList.toggle('active', k === index); });
    };
    var arm = function () {
      clearInterval(timer);
      if (!reduceMotion) timer = setInterval(function () { show(index + 1); }, 7000);
    };

    hero.querySelector('[data-hero-prev]').addEventListener('click', function () { show(index - 1); arm(); });
    hero.querySelector('[data-hero-next]').addEventListener('click', function () { show(index + 1); arm(); });
    dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); arm(); }); });
    arm();
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Terms modal: server sets data-terms-accepted="false" on <body> when acceptance is required
  if (document.body.dataset.termsAccepted === 'false') {
    var el = document.getElementById('tncModal');
    if (el) new bootstrap.Modal(el).show();
  }
})();
