// Updates the link overlay with destination URLs on hover and focus
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('linkoverlay');
  const links = document.querySelectorAll('.button');

  if (!overlay) return;

  links.forEach((link) => {
    const showOverlay = () => {
      overlay.textContent = link.href;
      overlay.style.opacity = '0.5';
    };

    const hideOverlay = () => {
      overlay.textContent = '';
      overlay.style.opacity = '0';
    };

    link.addEventListener('mouseenter', showOverlay);
    link.addEventListener('mouseleave', hideOverlay);
    link.addEventListener('focus', showOverlay);
    link.addEventListener('blur', hideOverlay);
  });
});