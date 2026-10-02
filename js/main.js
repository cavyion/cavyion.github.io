document.addEventListener('DOMContentLoaded', () => {
  const bgVideo = document.querySelector('video.bg-image');
  if (bgVideo) {
    const playVideo = () => {
      bgVideo.play().catch(() => {});
    };
    playVideo();
    window.addEventListener('click', playVideo, { once: true });
    window.addEventListener('touchstart', playVideo, { once: true });
    window.addEventListener('keydown', playVideo, { once: true });
  }
});