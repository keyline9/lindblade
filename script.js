const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.hasAttribute('hidden');
    mobileNav.toggleAttribute('hidden');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      mobileNav.setAttribute('hidden','');
      menuBtn.setAttribute('aria-expanded','false');
    }
  });
}
