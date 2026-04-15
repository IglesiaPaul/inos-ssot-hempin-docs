// assets/js/navbar.js
// Lightweight navbar loader with dropdown support for static GitHub Pages sites

// Define base path for GitHub Pages project site
const BASE_PATH = '/inos-ssot-hempin-docs';

document.addEventListener('DOMContentLoaded', function() {
  const navbarHTML = `
    <header>
      <div class="container">
        <nav>
          <a href="${BASE_PATH}/index.html" class="logo">NADA<span>.</span></a>
          <ul class="nav-links">
            <li><a href="${BASE_PATH}/index.html">Home</a></li>
            
            <li class="dropdown">
              <a href="#" class="dropbtn">About ▾</a>
              <div class="dropdown-content">
                <a href="${BASE_PATH}/why-nada.html">Why NADA?</a>
                <a href="${BASE_PATH}/team.html">Team & Consortium</a>
                <a href="${BASE_PATH}/strategy.html">Strategy</a>
              </div>
            </li>
            
            <li class="dropdown">
              <a href="#" class="dropbtn">Platform ▾</a>
              <div class="dropdown-content">
                <a href="${BASE_PATH}/architecture.html">Architecture</a>
                <a href="${BASE_PATH}/technology.html">Technology</a>
                <a href="${BASE_PATH}/hempin.html">HEMPIN</a>
                <a href="${BASE_PATH}/case-study.html">Case Study</a>
              </div>
            </li>
            
            <li class="dropdown">
              <a href="#" class="dropbtn">Funding ▾</a>
              <div class="dropdown-content">
                <a href="${BASE_PATH}/grants/">Grants Overview</a>
                <a href="${BASE_PATH}/grants/eic-pathfinder-2026/">EIC Pathfinder 2026</a>
                <a href="${BASE_PATH}/funding/investors.html">Investors</a>
                <a href="${BASE_PATH}/funding/regeneration-fund.html">Regeneration Fund</a>
              </div>
            </li>
            
            <li class="dropdown">
              <a href="#" class="dropbtn">Progress ▾</a>
              <div class="dropdown-content">
                <a href="${BASE_PATH}/roadmap.html">Public Roadmap</a>
                <a href="${BASE_PATH}/grants/eic-pathfinder-2026/workpackages.html">Grant Work Packages</a>
              </div>
            </li>
            
            <li><a href="${BASE_PATH}/involved.html">Get Involved</a></li>
            <li><a href="https://github.com/IglesiaPaul/inos-ssot-hempin-docs" target="_blank">GitHub</a></li>
          </ul>
          <a href="${BASE_PATH}/involved.html" class="cta-button">Join the Mission</a>
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
    // Extract just the filename from the href (remove base path)
    const linkPage = linkHref.replace(BASE_PATH + '/', '').split('#')[0];
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
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
