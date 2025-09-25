// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);
themeToggle.addEventListener('click', () => {
  const t = body.getAttribute('data-theme');
  const next = t === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});
function updateThemeIcon(theme){ themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙'; }

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Intersection Observer for fade-ins
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('visible'); }});
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

// Contact form (demo submission)
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const fd = new FormData(this);
  const name = fd.get('name');
  const email = fd.get('email');
  const btn = this.querySelector('.submit-button');
  const original = btn.textContent;
  btn.textContent = 'Sending...'; btn.disabled = true;
  setTimeout(()=>{
    alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon!`);
    this.reset(); btn.textContent = original; btn.disabled = false;
  }, 1200);
});