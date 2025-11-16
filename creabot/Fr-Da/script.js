// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.lang-toggle');
  const dropdown = document.querySelector('.dropdown');
  const arrow = toggle.querySelector('.arrow');

  if (!toggle || !dropdown || !arrow) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    arrow.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(0deg)';
  });

  // Fermer si clic ailleurs
  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    arrow.style.transform = 'rotate(0deg)';
  });

  // Ne pas fermer si clic dans le menu
  dropdown.addEventListener('click', (e) => e.stopPropagation());
});