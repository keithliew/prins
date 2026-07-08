/* PRINS Solution — shared behaviour: nav toggle, fade-up reveals, count-up stats, shared footer */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Shared footer (single source of truth — edit here to update every page)
  var FOOTER_HTML =
    '<div class="wrap foot-grid">' +
      '<div>' +
        '<img src="assets/logo-white.png" alt="PRINS Solution" width="120" height="35" loading="lazy">' +
        '<p class="foot-line">A Full-Service Event &amp; Marketing Agency. Helping corporate brands plan, produce and activate memorable events across Malaysia since 2016.</p>' +
      '</div>' +
      '<div>' +
        '<h2 class="foot-h">Services</h2>' +
        '<ul class="foot-links">' +
          '<li><a href="services-corporate-events.html">Corporate Event Management</a></li>' +
          '<li><a href="services-brand-activation.html">Brand Activation &amp; Roadshows</a></li>' +
          '<li><a href="services-employee-engagement.html">Employee Engagement &amp; Team Building</a></li>' +
          '<li><a href="services-corporate-gifts.html">Corporate Gifts &amp; Event Fulfilment</a></li>' +
        '</ul>' +
      '</div>' +
      '<div>' +
        '<h2 class="foot-h">Company</h2>' +
        '<ul class="foot-links">' +
          '<li><a href="about.html">About</a></li>' +
          '<li><a href="showcase.html">Showcase</a></li>' +
          '<li><a href="contact.html">Contact</a></li>' +
          '<li><a href="https://www.instagram.com/prins_solution/" rel="noopener">Instagram</a></li>' +
        '</ul>' +
      '</div>' +
      '<div>' +
        '<h2 class="foot-h">Contact</h2>' +
        '<ul class="foot-links">' +
          '<li>Email: admin@prins.my <span class="tbc">[to be confirmed]</span></li>' +
          '<li>Phone: 03&#8209;6411&nbsp;9533 <span class="tbc">[to be confirmed]</span></li>' +
          '<li>Mont Kiara, Kuala Lumpur <span class="tbc">[full address to be confirmed]</span></li>' +
          '<li>Mon&ndash;Fri, 10.30am&ndash;6.00pm</li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
    '<div class="wrap foot-legal">' +
      '<p>&copy; PRINS Solution Sdn Bhd. All rights reserved. Company registration no. <span class="tbc">[to be confirmed]</span>. All client names, event photographs and campaign figures shown on this site are drawn from PRINS Solution&rsquo;s own project record.</p>' +
    '</div>';
  var footerEl = document.getElementById('site-footer');
  if (footerEl) { footerEl.innerHTML = FOOTER_HTML; }

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Fade-up reveals
  var reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // Count-up statistics (skips years <= 2100 read as literal, respects reduced motion)
  var nums = document.querySelectorAll('.num[data-count]');
  function animate(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduced || target <= 2100) { return; } // years shown as-is
    var start = null, dur = 1200;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-US') + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window && !reduced) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animate(e.target); io2.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    nums.forEach(function (el) { io2.observe(el); });
  }
})();
