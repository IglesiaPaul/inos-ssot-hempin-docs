// assets/js/footer.js
document.addEventListener('DOMContentLoaded', function() {
  const footerHTML = `
    <footer>
      <div class="container">
        <p><strong>HEMPIN</strong> — Verified Truth Infrastructure for Planetary Regeneration</p>
        <p>
          <a href="index.html">Home</a> · 
          <a href="strategy.html">Strategy</a> · 
          <a href="roadmap.html">Roadmap</a> · 
          <a href="technology.html">Technology</a> · 
          <a href="workpackages.html">Work Packages</a> · 
          <a href="involved.html">Get Involved</a> · 
          <a href="https://github.com/IglesiaPaul/inos-ssot-hempin-docs" target="_blank">GitHub</a>
        </p>
        <p style="margin-top: 20px;">© 2026 HEMPIN. Mission-locked for Solarpunk 2045.</p>
      </div>
    </footer>
  `;
  
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
