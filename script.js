'use strict';

/* ── Utilities ─────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Custom Cursor ─────────────────────────────────────────── */
(function initCursor() {
  const dot  = $('#cursorDot');
  const ring = $('#cursorRing');
  if (!dot || !ring || window.matchMedia('(pointer: coarse)').matches) return;

  let mx = -100, my = -100, rx = -100, ry = -100;
  let raf;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function tick() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    raf = requestAnimationFrame(tick);
  }
  tick();

  $$('a, button, [role="button"], input, textarea, select, .glass, .social, .back-top').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

/* ── Scroll progress bar ────────────────────────────────────── */
(function initScrollBar() {
  const bar = $('#scrollBar');
  if (!bar) return;
  function update() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0';
  }
  window.addEventListener('scroll', update, { passive: true });
})();

/* ── Navigation ─────────────────────────────────────────────── */
(function initNav() {
  const nav    = $('#nav');
  const toggle = $('#navToggle');
  const links  = $('#navLinks');
  if (!nav) return;

  // Scrolled state
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveLink();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  $$('.nav-link', links).forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Active link
  const sections = $$('section[id]');
  function updateActiveLink() {
    const y = window.scrollY + 100;
    let current = '';
    sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
    $$('.nav-link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  // Smooth scroll
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = $(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ── Particle Canvas ─────────────────────────────────────────── */
(function initCanvas() {
  const canvas = $('#heroCanvas');
  if (!canvas || prefersReduced()) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles, mouse = { x: -999, y: -999 };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeParticles() {
    const count = Math.min(Math.floor((W * H) / 12000), 120);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 1.5 + .5,
      alpha: Math.random() * .5 + .1,
    }));
  }

  resize();
  makeParticles();
  window.addEventListener('resize', () => { resize(); makeParticles(); });

  const heroSection = $('#hero');
  heroSection?.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  heroSection?.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });

  const LINK_DIST = 130;
  const PUSH_DIST = 100;
  const PUSH_STR  = 0.8;

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      // Mouse repulsion
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < PUSH_DIST && dist > 0) {
        const force = (PUSH_DIST - dist) / PUSH_DIST * PUSH_STR;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      // Dampen
      p.vx *= .98; p.vy *= .98;

      // Move
      p.x += p.vx; p.y += p.vy;

      // Wrap
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
      ctx.fill();
    });

    // Lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.15;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── Role Typer ─────────────────────────────────────────────── */
(function initTyper() {
  const el = $('#roleText');
  if (!el) return;

  const roles = [
    'AI/ML Engineer',
    'GAN Researcher',
    'Full Stack Developer',
    'Data Science Researcher',
    'Cybersecurity Analyst',
  ];

  let ri = 0, ci = 0, deleting = false, wait = 0;
  const SPEED_TYPE = 75, SPEED_DEL = 35, PAUSE = 2000, PAUSE_DEL = 400;

  function tick() {
    const role = roles[ri];
    if (!deleting) {
      ci++;
      el.textContent = role.slice(0, ci);
      if (ci === role.length) { deleting = true; wait = PAUSE; return setTimeout(tick, wait); }
      setTimeout(tick, SPEED_TYPE);
    } else {
      if (wait > 0) { wait = 0; return setTimeout(tick, PAUSE_DEL); }
      ci--;
      el.textContent = role.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
        setTimeout(tick, 400);
      } else {
        setTimeout(tick, SPEED_DEL);
      }
    }
  }
  setTimeout(tick, 800);
})();

/* ── Scroll Reveal ──────────────────────────────────────────── */
(function initReveal() {
  if (prefersReduced()) {
    $$('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = parseInt(entry.target.dataset.delay || '0');
      setTimeout(() => entry.target.classList.add('visible'), delay);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal').forEach(el => obs.observe(el));
})();

/* ── Counter Animation ──────────────────────────────────────── */
(function initCounters() {
  const els = $$('.stat-n[data-count]');
  if (!els.length || prefersReduced()) {
    els.forEach(el => { el.textContent = el.dataset.count; });
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const dur = 1200;
      const start = performance.now();
      function frame(now) {
        const t = Math.min((now - start) / dur, 1);
        const val = Math.round(easeOut(t) * target);
        el.textContent = val;
        if (t < 1) requestAnimationFrame(frame);
        else el.textContent = target;
      }
      requestAnimationFrame(frame);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  els.forEach(el => obs.observe(el));

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
})();

/* ── Card Tilt ──────────────────────────────────────────────── */
(function initTilt() {
  if (prefersReduced() || window.matchMedia('(pointer: coarse)').matches) return;

  $$('.glass').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width  / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(800px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg) translateZ(4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .4s cubic-bezier(0,0.55,0.45,1)';
      setTimeout(() => { card.style.transition = ''; }, 400);
    });
  });
})();

/* ── Contact Form ───────────────────────────────────────────── */
(function initForm() {
  const form = $('#contactForm');
  const btn  = $('#submitBtn');
  const msg  = $('#formMsg');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = 'Sending…';
    msg.className = 'form-msg';
    msg.textContent = '';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        msg.textContent = 'Message sent! I\'ll get back to you soon.';
        msg.className = 'form-msg success';
      } else {
        throw new Error();
      }
    } catch {
      msg.textContent = 'Something went wrong. Please email me directly.';
      msg.className = 'form-msg error';
    }

    btn.disabled = false;
    btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Send Message';
    setTimeout(() => { msg.textContent = ''; msg.className = 'form-msg'; }, 6000);
  });
})();

/* ── Keyboard nav ───────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const links = $('#navLinks');
    const toggle = $('#navToggle');
    if (links?.classList.contains('open')) {
      links.classList.remove('open');
      toggle?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  }
});
