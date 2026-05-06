  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  
  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // Mobile dropdown toggle (for Services)
  const dropdowns = document.querySelectorAll('.dropdown');
  if (window.innerWidth <= 768) {
    dropdowns.forEach(drop => {
      const link = drop.querySelector('a');
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          drop.classList.toggle('open');
        });
      }
    });
  }

  // On resize, reset open state if desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      dropdowns.forEach(drop => drop.classList.remove('open'));
      if (mainNav) mainNav.classList.remove('active');
    } else {
      // re-attach logic for mobile if needed, but already attached
    }
  });