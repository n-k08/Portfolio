const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const heroName = document.querySelector('.hero-name');
setInterval(() => {
  heroName.style.transform = `skewX(${(Math.random()-0.5)*1.5}deg)`;
  setTimeout(() => heroName.style.transform = 'skewX(0deg)', 80);
}, 4000);

let lastTrail = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastTrail < 30) return;
  lastTrail = now;
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:4px;height:4px;border-radius:50%;background:#00fff5;pointer-events:none;z-index:9998;box-shadow:0 0 6px #00fff5;transition:opacity 0.4s;opacity:0.6;`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; setTimeout(() => t.remove(), 400); }, 50);
});
