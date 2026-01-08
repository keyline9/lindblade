const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && mobileNav) {
  // Toggle menu
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileNav.hasAttribute('hidden');

    if (isOpen) {
      mobileNav.setAttribute('hidden', '');
      menuBtn.setAttribute('aria-expanded', 'false');
    } else {
      mobileNav.removeAttribute('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
    }
  });

  // ✅ Close menu when a link is clicked
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.setAttribute('hidden', '');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu if viewport grows past mobile
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      mobileNav.setAttribute('hidden', '');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
