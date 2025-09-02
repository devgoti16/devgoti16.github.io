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

  // 🔹 Portfolio / Exploring tab toggle
  const portfolioSection = document.getElementById('portfolioSection');
  const exploringSection = document.getElementById('exploringSection');
  const mainTabs = document.querySelectorAll('.main-tab');

  if (portfolioSection && exploringSection && mainTabs.length) {
    mainTabs.forEach(tab => {
      tab.addEventListener('click', e => {
        e.preventDefault();
        // toggle active state
        mainTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        if (tab.dataset.section === 'portfolio') {
          portfolioSection.style.display = 'block';
          exploringSection.style.display = 'none';
        } else if (tab.dataset.section === 'exploring') {
          portfolioSection.style.display = 'none';
          exploringSection.style.display = 'block';
        }
      });
    });
  }
});
