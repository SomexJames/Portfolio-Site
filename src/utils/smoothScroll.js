const clamp = (min, value, max) => Math.min(max, Math.max(min, value));

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export const smoothScrollTo = (targetId) => {
  const target = document.querySelector(targetId);
  if (!target) {
    return;
  }

  const startY = window.pageYOffset;
  const targetY = target.getBoundingClientRect().top + startY;
  const distance = targetY - startY;
  const absDistance = Math.abs(distance);
  const duration = clamp(320, 320 + absDistance * 0.25, 900);
  let startTime = null;

  const step = (timestamp) => {
    if (startTime === null) {
      startTime = timestamp;
    }
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};
