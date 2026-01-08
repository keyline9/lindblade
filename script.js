const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (menuBtn && mobileNav) {
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

  // Close the mobile menu after clicking a link
  mobileNav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      mobileNav.setAttribute('hidden', '');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.classList.remove('is-open');
    });
  });
}
