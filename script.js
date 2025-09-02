// small interactive bits: nav toggle and year autopopulate
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');

  // Mobile nav toggle
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Auto-update current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Close mobile nav when link is clicked
  document.querySelectorAll('#nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('show')) nav.classList.remove('show');
    });
  });

  // Portfolio / Exploring tab toggle
  const portfolioSection = document.getElementById('portfolioSection');
  const exploringSection = document.getElementById('exploringSection');
  const mainTabs = document.querySelectorAll('.main-tab');

  if (portfolioSection && exploringSection && mainTabs.length) {
    mainTabs.forEach(tab => {
      tab.addEventListener('click', e => {
        e.preventDefault();

        // Toggle active tab
        mainTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show/hide sections
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

  // Optional: Horizontal scrolling for exploring images on mobile
  const imageRows = document.querySelectorAll('.image-row');
  imageRows.forEach(row => {
    row.style.overflowX = 'auto';
    row.style.display = 'flex';
    row.style.gap = '0.5rem';
    row.style.scrollBehavior = 'smooth';
  });
 

});
