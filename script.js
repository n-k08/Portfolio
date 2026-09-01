// ---------- Project data (sourced from resume + github.com/n-k08 pinned repos) ----------
const PROJECTS = [
  {
    title: "BikeInsight 360",
    desc: "Full-stack app aggregating motorcycle data for discovery, recommendations, and total cost of ownership. ML models for personalized recommendations, resale value prediction, and rider-profile clustering, served through a Node/Express API and React frontend.",
    tags: ["Python", "scikit-learn", "React", "Node.js"],
    link: "https://github.com/n-k08"
  },
  {
    title: "CollabBridge",
    desc: "Scalable full-stack matchmaking platform for students and developers. JWT authentication, real-time messaging with Socket.io, and a smart matching algorithm based on skills, interests, and experience.",
    tags: ["MongoDB", "Express", "React", "Socket.io"],
    link: "https://github.com/n-k08/CollabBridge"
  },
  {
    title: "AI Knowledge Graph Generator",
    desc: "NLP-based app that transforms unstructured text into interactive knowledge graphs by extracting entities and relationships, with graph construction and visualization for intuitive exploration.",
    tags: ["Python", "NLP", "Graph Algorithms"],
    link: "https://weather-forecasting-system-nk.streamlit.app/"
  },
  {
    title: "Weather Forecasting System",
    desc: "Time-series forecasting engine built and evaluated with ARIMA, SARIMA, and regression models on historical climate data, with preprocessing and tuning to improve accuracy.",
    tags: ["Python", "ARIMA", "SARIMA", "Regression"],
    link: "https://github.com/n-k08"
  },
  {
    title: "DeepFake Detection",
    desc: "Deep learning pipeline using XceptionNet to detect AI-generated and manipulated images, identifying forged regions with high spatial precision.",
    tags: ["Python", "XceptionNet", "Computer Vision"],
    link: "https://deep-fake-detection-nk.streamlit.app/"
  },
  {
    title: "Power BI Car Sale Analytics",
    desc: "Interactive Power BI dashboard analyzing car sales data to surface trends, pricing patterns, and demand signals for decision-making.",
    tags: ["Power BI", "Data Analytics"],
    link: "https://github.com/n-k08/Power-BI-Car-Sale-analytics"
  },
  {
    title: "Topic Trend Analyzer",
    desc: "NLP tool that tracks and visualizes how topics and keywords trend over time across a text corpus, surfacing emerging themes.",
    tags: ["Python", "NLP", "Data Visualization"],
    link: "https://github.com/n-k08/Topic-Trend-Analyzer"
  },
  {
    title: "CareerCraft",
    desc: "Full-stack, AI-assisted career development platform for resume building, portfolio creation, and personalized guidance. Secure auth, PDF resume generation, and RESTful APIs on the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/n-k08"
  }
];

function renderProjects(){
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card fade-up">
      <span class="project-card__index">${String(i+1).padStart(2,'0')}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-card__tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <a class="project-card__link" href="${p.link}" target="_blank" rel="noopener">View Project <span>&rarr;</span></a>
    </article>
  `).join('');
}

// ---------- Hero load-in sequence ----------
function playHeroIntro(){
  const reveals = document.querySelectorAll('.hero .reveal');
  reveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('show'), 160 + i * 160);
  });
}

// ---------- Nav toggle (mobile) ----------
function initNav(){
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }));
}

// ---------- Scroll reveal ----------
function initScrollReveal(){
  const targets = document.querySelectorAll('.fade-up, .about__grid, .timeline, .skills, .certs, .contact__grid');
  targets.forEach(t => t.classList.add('fade-up'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}

// ---------- Subtle portrait parallax ----------
function initParallax(){
  const portrait = document.querySelector('.hero__portrait');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight){
      portrait.style.transform = `translateY(${y * 0.12}px)`;
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initNav();
  initScrollReveal();
  initParallax();
  requestAnimationFrame(playHeroIntro);
});
