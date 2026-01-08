const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && mobileNav) {
  // Ensure correct initial state
  menuBtn.setAttribute('aria-expanded', 'false');
  if (!mobileNav.hasAttribute('hidden')) mobileNav.setAttribute('hidden', '');

  menuBtn.addEventListener('click', () => {
    const isHidden = mobileNav.hasAttribute('hidden');

    if (isHidden) {
      mobileNav.removeAttribute('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.classList.add('is-open');
    } else {
      mobileNav.setAttribute('hidden', '');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.classList.remove('is-open');
    }
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      mobileNav.setAttribute('hidden', '');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.classList.remove('is-open');
    });
  });

  // Close if viewport grows past mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      mobileNav.setAttribute('hidden', '');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.classList.remove('is-open');
    }
  });
}
