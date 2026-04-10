// assets/js/navbar.js
// Lightweight navbar loader with dropdown support for static GitHub Pages sites

document.addEventListener('DOMContentLoaded', function() {
  const navbarHTML = `
    <header>
      <div class="container">
        <nav>
          <a href="index.html" class="logo">NADA<span>.</span></a>
          <ul class="nav-links">
            <li><a href="why-nada.html">Why NADA?</a></li>
            <li class="dropdown">
              <a href="hempin.html" class="dropbtn">HEMPIN ▾</a>
              <div class="dropdown-content">
                <a href="hempin.html">Industry #1 Overview</a>
                <a href="hempin.html#bud">BUD AI Tool</a>
                <a href="hempin.html#fund">Regeneration Fund</a>
              </div>
            </li>
            <li class="dropdown">
              <a href="#" class="dropbtn">Grant Proposal ▾</a>
              <div class="dropdown-content">
                <a href="strategy.html">Strategy</a>
                <a href="roadmap.html">Roadmap</a>
                <a href="technology.html">Technology</a>
                <a href="workpackages.html">Work Packages</a>
              </div>
            </li>
            <li><a href="involved.html">Get Involved</a></li>
            <li><a href="https://github.com/IglesiaPaul/inos-ssot-hempin-docs" target="_blank">GitHub</a></li>
          </ul>
          <a href="involved.html" class="cta-button">Join the Mission</a>
        </nav>
      </div>
    </header>
  `;
  
  // Insert navbar at top of body
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  
  // Add active class to current page link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a:not(.dropbtn)');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    const linkPage = linkHref.includes('#') ? linkHref.split('#')[0] : linkHref;
    if (linkPage === currentPage) {
      link.classList.add('active');
      // Also highlight parent dropdown if applicable
      const dropdown = link.closest('.dropdown');
      if (dropdown) {
        dropdown.querySelector('.dropbtn').classList.add('active');
      }
    }
  });
  
  // Simple dropdown toggle for mobile (click to open)
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropbtn');
    btn.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(d => d.classList.remove('open'));
    }
  });
});
