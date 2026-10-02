// Updates the link overlay with destination URLs on hover and focus
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('linkoverlay');
  const links = document.querySelectorAll('.button');

  if (overlay) {
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
  }

  // Pause background video if user prefers reduced motion
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const bgVideo = document.querySelector('video.bg-image');

  const handleMotionPreference = () => {
    if (!bgVideo) return;
    if (motionQuery.matches) {
      bgVideo.pause();
    } else {
      bgVideo.play().catch(() => {});
    }
  };

  handleMotionPreference();
  if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', handleMotionPreference);
  }
});