// ============================================
// TOMA — Site JavaScript
// ============================================

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

// Nav background on scroll
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      nav.style.padding = '16px 0';
      nav.style.background = 'rgba(246, 242, 233, 0.95)';
    } else {
      nav.style.padding = '24px 0';
      nav.style.background = 'rgba(246, 242, 233, 0.85)';
    }
  }, { passive: true });
}

// Scroll reveal — safe fallback: content never stays hidden if JS fails
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealStyle = document.createElement('style');
  revealStyle.textContent = `
    .js-fade {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
                  transform 1s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .js-fade.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(revealStyle);

  const selectors = [
    '.principle-item',
    '.service-row',
    '.stat-item',
    '.profile-row',
    '.cert-item',
    '.bp-item',
    '.form-row'
  ];

  document.querySelectorAll(selectors.join(', ')).forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) return;
    el.classList.add('js-fade');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.12
  });

  document.querySelectorAll('.js-fade').forEach(el => observer.observe(el));

  // Safety net
  setTimeout(() => {
    document.querySelectorAll('.js-fade:not(.in-view)').forEach(el => {
      el.classList.add('in-view');
    });
  }, 3000);
}
