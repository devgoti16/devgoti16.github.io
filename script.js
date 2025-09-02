// small interactive bits: nav toggle and year autopopulate
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // auto year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // close mobile nav on link click
  document.querySelectorAll('#nav a').forEach(a=>{
    a.addEventListener('click', () => {
      if (nav.classList.contains('show')) nav.classList.remove('show');
    });
  });
});
