// assets/js/navbar.js
// Lightweight navbar loader for static GitHub Pages sites

document.addEventListener('DOMContentLoaded', function() {
  const navbarHTML = `
    <header>
      <div class="container">
        <nav>
          <a href="index.html" class="logo">HEMPIN<span>.</span></a>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="strategy.html">Strategy</a></li>
            <li><a href="roadmap.html">Roadmap</a></li>
            <li><a href="technology.html">Technology</a></li>
            <li><a href="workpackages.html">Work Packages</a></li>
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
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    const linkPage = linkHref.includes('#') ? linkHref.split('#')[0] : linkHref;
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});
