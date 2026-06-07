'use strict';

document.documentElement.classList.add('js');

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const reduced = () => window.matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ── Nav scroll + mobile menu ── */
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

/* ── Three.js Neural Network Hero ── */
(function () {
  const canvas = document.getElementById('webgl');
  if (!canvas || typeof THREE === 'undefined') return;
  if (reduced()) { canvas.style.display = 'none'; return; }

  const W = () => window.innerWidth;
  const H = () => window.innerHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(W(), H());

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(65, W() / H(), 0.1, 1500);
  camera.position.set(0, 0, 500);

  const isMobile = window.matchMedia('(max-width:768px)').matches;
  const N = isMobile ? 70 : 160;
  const SX = W() * 1.1;
  const SY = H() * 0.95;
  const SZ = 260;
  const MAX_D = 138;
  const MAX_SEGS = N * 6;

  const nodes = Array.from({ length: N }, () => ({
    x: (Math.random() - .5) * SX,
    y: (Math.random() - .5) * SY,
    z: (Math.random() - .5) * SZ,
    vx: (Math.random() - .5) * 0.2,
    vy: (Math.random() - .5) * 0.2,
    vz: (Math.random() - .5) * 0.06,
  }));

  const pGeo = new THREE.BufferGeometry();
  const pArr = new Float32Array(N * 3);
  const pAttr = new THREE.BufferAttribute(pArr, 3);
  pAttr.setUsage(THREE.DynamicDrawUsage);
  pGeo.setAttribute('position', pAttr);
  const ptCloud = new THREE.Points(pGeo, new THREE.PointsMaterial({
    color: 0xa78bfa, size: isMobile ? 1.8 : 2.5,
    transparent: true, opacity: 0.85, sizeAttenuation: true,
  }));
  scene.add(ptCloud);

  const lGeo = new THREE.BufferGeometry();
  const lArr = new Float32Array(MAX_SEGS * 6);
  const lAttr = new THREE.BufferAttribute(lArr, 3);
  lAttr.setUsage(THREE.DynamicDrawUsage);
  lGeo.setAttribute('position', lAttr);
  const lines = new THREE.LineSegments(lGeo, new THREE.LineBasicMaterial({
    color: 0x818cf8, transparent: true, opacity: 0.22,
  }));
  scene.add(lines);

  let tx = 0, ty = 0;
  document.addEventListener('mousemove', e => {
    tx = (e.clientX / W() - .5) * 35;
    ty = -(e.clientY / H() - .5) * 22;
  });

  let rafId;

  function animate() {
    rafId = requestAnimationFrame(animate);

    for (let i = 0; i < N; i++) {
      const n = nodes[i];
      n.x += n.vx; n.y += n.vy; n.z += n.vz;
      if (Math.abs(n.x) > SX / 2) n.vx *= -1;
      if (Math.abs(n.y) > SY / 2) n.vy *= -1;
      if (Math.abs(n.z) > SZ / 2) n.vz *= -1;
      pArr[i * 3] = n.x;
      pArr[i * 3 + 1] = n.y;
      pArr[i * 3 + 2] = n.z;
    }
    pAttr.needsUpdate = true;

    let seg = 0;
    outer: for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        if (seg >= MAX_SEGS) break outer;
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        if (dx * dx + dy * dy + dz * dz < MAX_D * MAX_D) {
          const b = seg * 6;
          lArr[b]   = nodes[i].x; lArr[b+1] = nodes[i].y; lArr[b+2] = nodes[i].z;
          lArr[b+3] = nodes[j].x; lArr[b+4] = nodes[j].y; lArr[b+5] = nodes[j].z;
          seg++;
        }
      }
    }
    lGeo.setDrawRange(0, seg * 2);
    lAttr.needsUpdate = true;

    camera.position.x += (tx - camera.position.x) * 0.04;
    camera.position.y += (ty - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = W() / H();
    camera.updateProjectionMatrix();
    renderer.setSize(W(), H());
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else { cancelAnimationFrame(rafId); animate(); }
  });
})();

/* ── Role typer ── */
(function () {
  const el = $('#typer');
  if (!el) return;

  const roles = [
    'AI/ML Engineer',
    'GAN Researcher',
    'Data Science Researcher',
    'Full Stack Developer',
    'Cybersecurity Analyst',
  ];

  if (reduced()) { el.textContent = roles[0]; return; }

  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const word = roles[ri];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(tick, 2000);
      } else {
        setTimeout(tick, 75);
      }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
        setTimeout(tick, 400);
      } else {
        setTimeout(tick, 38);
      }
    }
  }

  setTimeout(tick, 600);
})();

/* ── Counter animation ── */
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

/* ── Card hover tilt ── */
(function () {
  if (reduced() || window.matchMedia('(pointer:coarse)').matches) return;
  $$('.sk-card,.proj-card,.r-card,.tl-card,.pub-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
      const y = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
      card.style.transform = `perspective(900px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .5s cubic-bezier(0,.55,.45,1)';
      card.style.transform = '';
      setTimeout(() => (card.style.transition = ''), 500);
    });
  });
})();

/* ── Contact form ── */
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
