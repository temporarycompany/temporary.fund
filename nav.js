// nav.js — temporary.fund shared navigation
// Include on every page with: <script src="nav.js"></script>
// Place a <div id="tf-nav"></div> where you want the nav to appear,
// or it will be prepended to <body> automatically.

(function() {
  const NAV_CSS = `
<style id="tf-nav-styles">
  #tf-nav nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; justify-content: space-between; align-items: baseline;
    padding: 1.1rem 1.5rem;
    background: #ffffff;
    border-bottom: 1px solid #e8e8e6;
    font-family: -apple-system, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  #tf-nav .tf-logo {
    font-size: 0.8rem; font-weight: 400; color: #111110;
    text-decoration: none;
  }
  #tf-nav .tf-links {
    display: flex; flex-direction: row; align-items: baseline;
    gap: 1.5rem; list-style: none; margin: 0; padding: 0;
  }
  #tf-nav .tf-links a {
    font-size: 0.8rem; color: #111110; text-decoration: none;
    transition: color 0.15s;
  }
  #tf-nav .tf-links a:hover { color: #0A2BF5; }
  #tf-nav .tf-dropdown { position: relative; padding-bottom: 1rem; margin-bottom: -1rem; }
  #tf-nav .tf-dropdown-menu {
    display: none; position: absolute; top: 100%; left: 0;
    background: #ffffff; border: 1px solid #e8e8e6;
    min-width: 150px; padding: 0.4rem 0; z-index: 200; margin-top: 0;
  }
  #tf-nav .tf-dropdown:hover .tf-dropdown-menu { display: block; }
  #tf-nav .tf-dropdown-menu a {
    display: block; padding: 0.5rem 1rem;
    font-size: 0.75rem; color: #111110; text-decoration: none;
  }
  #tf-nav .tf-dropdown-menu a:hover { color: #0A2BF5; background: #f9f9f8; }
  #tf-nav .tf-dropdown > a::after {
    content: ' -'; font-size: 0.6rem; color: #888885;
  }
  @media (max-width: 680px) {
    #tf-nav .tf-links { gap: 1rem; }
    #tf-nav .tf-links a { font-size: 0.75rem; }
  }
</style>`;

  const NAV_HTML = `
<nav>
  <a href="/index.html" class="tf-logo">temporary.fund</a>
  <ul class="tf-links">
    <li><a href="/index.html#mission">Mission</a></li>
    <li><a href="/index.html#how">How It Works</a></li>
    <li class="tf-dropdown">
      <a href="#">People</a>
      <div class="tf-dropdown-menu">
        <a href="/team.html">Team</a>
        <a href="/advisors.html">Advisors</a>
      </div>
    </li>
    <li><a href="/eligibility.html">Eligibility</a></li>
    <li><a href="/index.html#submit">Join Waitlist</a></li>
    <li><a href="/index.html#contact">Contact</a></li>
  </ul>
</nav>`;

  // Inject styles into <head>
  document.head.insertAdjacentHTML('beforeend', NAV_CSS);

  // Inject nav HTML
  let target = document.getElementById('tf-nav');
  if (!target) {
    target = document.createElement('div');
    target.id = 'tf-nav';
    document.body.prepend(target);
  }
  target.innerHTML = NAV_HTML;

  // Add top padding to body so content clears the fixed nav
  // (only if not already set)
  const currentPadding = parseInt(getComputedStyle(document.body).paddingTop) || 0;
  if (currentPadding < 50) {
    document.body.style.paddingTop = (document.body.style.paddingTop || '0px');
  }
})();
