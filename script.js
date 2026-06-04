'use strict';

// Enable JS-powered animations only when JS runs (progressive enhancement)
document.documentElement.classList.add('js');

/* ── Helpers ────────────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const reduced = () => window.matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ── Nav scroll + mobile menu ───────────────────────────────── */
(function () {
  const nav = $('#nav');
  const btn = $('#menu-btn');
  const menu = $('#nav-menu');
  if (!nav) return;

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 24);
    updateActive();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  btn?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });

  $$('#nav-menu a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn?.classList.remove('open');
      btn?.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = $$('section[id], header[id]');
  function updateActive() {
    const y = window.scrollY + 100;
    let cur = '';
    sections.forEach(s => { if (s.offsetTop <= y) cur = s.id; });
    $$('#nav-menu a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }

  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = $(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      btn?.classList.remove('open');
      btn?.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ── Role typer ─────────────────────────────────────────────── */
(function () {
  const el = $('#typer');
  if (!el) return;
  const roles = ['AI/ML Engineer', 'GAN Researcher', 'Data Science Researcher', 'Full Stack Developer', 'Cybersecurity Analyst'];
  let ri = 0, ci = 0, del = false;

  function tick() {
    const r = roles[ri];
    if (!del) {
      el.textContent = r.slice(0, ++ci);
      if (ci === r.length) { del = true; return setTimeout(tick, 2200); }
      setTimeout(tick, 72);
    } else {
      el.textContent = r.slice(0, --ci);
      if (ci === 0) { del = false; ri = (ri + 1) % roles.length; return setTimeout(tick, 350); }
      setTimeout(tick, 34);
    }
  }
  setTimeout(tick, 900);
})();

/* ── Scroll reveal ──────────────────────────────────────────── */
(function () {
  if (reduced()) return;
  const els = $$('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = parseInt(e.target.dataset.delay || 0);
      setTimeout(() => e.target.classList.add('in'), delay);
      io.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

  els.forEach(el => io.observe(el));
})();

/* ── Counter animation ──────────────────────────────────────── */
(function () {
  const els = $$('.count[data-to]');
  if (!els.length) return;

  function easeOut(t) { return 1 - (1 - t) ** 3; }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.to;
      if (reduced()) { el.textContent = target; io.unobserve(el); return; }
      const dur = 1400, start = performance.now();
      function frame(now) {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(easeOut(p) * target);
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = target;
      }
      requestAnimationFrame(frame);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  els.forEach(el => io.observe(el));
})();

/* ── Card hover tilt ─────────────────────────────────────────── */
(function () {
  if (reduced() || window.matchMedia('(pointer:coarse)').matches) return;
  $$('.card, .featured-card, .pub-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
      const y = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
      card.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .5s cubic-bezier(0,.55,.45,1)';
      card.style.transform = '';
      setTimeout(() => (card.style.transition = ''), 500);
    });
  });
})();

/* ── Contact form ────────────────────────────────────────────── */
(function () {
  const form = $('#contact-form');
  const btn  = $('#form-btn');
  const status = $('#form-status');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = 'Sending…';
    status.className = '';
    status.textContent = '';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        status.textContent = "Message sent! I'll get back to you soon.";
        status.className = 'ok';
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = 'Something went wrong — please email me directly.';
      status.className = 'err';
    }

    btn.disabled = false;
    btn.innerHTML = `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Send Message`;
    setTimeout(() => { status.textContent = ''; status.className = ''; }, 7000);
  });
})();
