/**
 * scale.js — sets --s (scale factor) on <html> based on .page width.
 * --s = page.offsetWidth / 1728  (Figma design width)
 * All calc(Xpx * var(--s)) values then map exactly to Figma pixels.
 */
(function () {
  var DESIGN_W = 1728;

  function update() {
    var page = document.querySelector('.page');
    if (!page) return;
    var s = page.offsetWidth / DESIGN_W;
    document.documentElement.style.setProperty('--s', s);
  }

  /* Run immediately, after DOM ready, and on every resize */
  update();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', update);
  }
  window.addEventListener('resize', update);
  /* Extra pass after first paint in case layout shifted */
  requestAnimationFrame(update);
})();
