/* =============================================================
   MAJID KHAN PORTFOLIO — INTERACTIONS & ANIMATIONS
   ============================================================= */

'use strict';

/* ─── CURSOR ────────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

if (cursor && cursorDot && window.matchMedia('(hover: hover)').matches) {
  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursorDot.style.left = mx + 'px';
    cursorDot.style.top = my + 'px';
  });

  const lerp = (a, b, n) => a + (b - a) * n;

  const animCursor = () => {
    cx = lerp(cx, mx, 0.12);
    cy = lerp(cy, my, 0.12);
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    requestAnimationFrame(animCursor);
  };
  animCursor();

  document.querySelectorAll('a, button, .research-card, .project-card-v2, .project-featured, .skill-pill')
    .forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

/* ─── NAVIGATION ─────────────────────────────────────────────── */
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Scroll detection
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  nav.classList.toggle('scrolled', scroll > 30);
  lastScroll = scroll;
}, { passive: true });

// Hamburger toggle
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', true);
    document.body.style.overflow = '';
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

const updateActiveNav = () => {
  const scrollPos = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
};

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ─── HERO CANVAS — CONSTELLATION GRID ──────────────────────── */
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, points, mouse = { x: -999, y: -999 };
  const COUNT = Math.min(60, Math.floor(window.innerWidth / 22));
  const CONNECT_DIST = 160;
  const MOUSE_DIST = 180;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = canvas.width = rect.width;
    H = canvas.height = rect.height;
    init();
  }

  function init() {
    points = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5
    }));
  }

  canvas.parentElement.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener('mouseleave', () => {
    mouse.x = -999; mouse.y = -999;
  });

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Subtle radial gradient background
    const grad = ctx.createRadialGradient(W * 0.3, H * 0.4, 0, W * 0.3, H * 0.4, W * 0.7);
    grad.addColorStop(0, 'rgba(201,168,76,0.04)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Update points
    points.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      // Mouse repulsion
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < MOUSE_DIST) {
        const force = (MOUSE_DIST - d) / MOUSE_DIST * 0.8;
        p.x += dx / d * force;
        p.y += dy / d * force;
      }
    });

    // Draw connections
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i], b = points[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECT_DIST) {
          const alpha = (1 - d / CONNECT_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(201,168,76,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw points
    points.forEach(p => {
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      const isNear = d < MOUSE_DIST;

      ctx.beginPath();
      ctx.arc(p.x, p.y, isNear ? p.r * 2.5 : p.r, 0, Math.PI * 2);
      ctx.fillStyle = isNear ? 'rgba(201,168,76,0.7)' : 'rgba(201,168,76,0.3)';
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

/* ─── ROLE TYPER ─────────────────────────────────────────────── */
(function initTyper() {
  const el = document.getElementById('roleTyper');
  if (!el) return;

  const roles = [
    'AI/ML Engineer',
    'Full Stack Developer',
    'Data Science Researcher',
    'GAN Specialist',
    'Cybersecurity Analyst'
  ];

  let roleIdx = 0, charIdx = 0, deleting = false;
  const SPEED_TYPE = 60, SPEED_DEL = 35, PAUSE = 2200;

  function type() {
    const current = roles[roleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, PAUSE);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? SPEED_DEL : SPEED_TYPE);
  }

  setTimeout(type, 800);
})();

/* ─── REVEAL ON SCROLL ───────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal-up');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ─── EXPERIENCE ITEM HOVER ──────────────────────────────────── */
document.querySelectorAll('.exp-item').forEach(item => {
  item.addEventListener('mouseenter', () => item.classList.add('active'));
  item.addEventListener('mouseleave', () => {
    // Keep first item active if none hovered
    const firstItem = document.querySelector('.exp-item:first-child');
    item.classList.remove('active');
    if (!document.querySelector('.exp-item.active')) {
      firstItem.classList.add('active');
    }
  });
});

/* ─── SMOOTH ANCHOR SCROLL ───────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ─── FORM FEEDBACK ──────────────────────────────────────────── */
(function initForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    const btn = form.querySelector('.form-submit');
    const originalHTML = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = '<span>Sending…</span>';
    btn.style.opacity = '0.7';

    // Formspree handles POST — just give feedback after brief delay
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      btn.style.opacity = '';
    }, 3000);
  });
})();

/* ─── SKILL PILL INTERACTION ─────────────────────────────────── */
document.querySelectorAll('.skill-pill').forEach(pill => {
  pill.setAttribute('role', 'listitem');
  pill.setAttribute('tabindex', '0');
});

/* ─── INTERSECTION COUNTER (stats) ──────────────────────────── */
(function initCounters() {
  const stats = document.querySelectorAll('.stat-n');
  if (!stats.length) return;

  const parsed = Array.from(stats).map(el => {
    const raw = el.textContent.replace(/\D/g, '');
    return { el, target: parseInt(raw) || 0, suffix: el.textContent.replace(/[\d]/g, '') };
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const data = parsed.find(d => d.el === entry.target);
      if (!data) return;

      let start = 0;
      const duration = 1200;
      const startTime = performance.now();

      const step = now => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        start = Math.round(eased * data.target);
        data.el.textContent = start + data.suffix;
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  stats.forEach(el => observer.observe(el));
})();

/* ─── CARD TILT (subtle 3D on hover) ────────────────────────── */
(function initTilt() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  const cards = document.querySelectorAll('.research-card, .project-featured');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateZ(4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ─── DIAGRAM NODE ANIMATION ─────────────────────────────────── */
(function animateDiagram() {
  const nodes = document.querySelectorAll('.diagram-node');
  if (!nodes.length) return;

  nodes.forEach((node, i) => {
    node.style.opacity = '0';
    node.style.transform = 'translateY(10px)';
    node.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      nodes.forEach((node, i) => {
        setTimeout(() => {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
        }, i * 150);
      });
      observer.disconnect();
    });
  }, { threshold: 0.3 });

  const featured = document.querySelector('.project-featured');
  if (featured) observer.observe(featured);
})();

/* ─── KEYBOARD NAVIGATION (a11y) ─────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (mobileMenu.classList.contains('open')) {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', true);
      document.body.style.overflow = '';
    }
  }
});

/* ─── PREFERS REDUCED MOTION ─────────────────────────────────── */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.reveal-up').forEach(el => {
    el.style.transition = 'none';
    el.classList.add('visible');
  });
}
