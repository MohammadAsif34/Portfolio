export const slowScroll = () => {
  const start = window.scrollY;
  const end = document.body.scrollHeight - window.innerHeight;
  const distance = end - start;

  let startTime = null;
  const speedFactor = 0.05;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = (currentTime - startTime) * speedFactor;

    const progress = Math.min(elapsed / distance, 1);

    window.scrollTo(0, start + distance * progress);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
};
