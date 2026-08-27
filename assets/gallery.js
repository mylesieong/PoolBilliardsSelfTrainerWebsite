/* Screenshot rail: hides the native scrollbar, so the affordances are the
   edge fade (CSS, works without this file) and these arrows (added here, and
   only once we know scripting is available). */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('.gallery').forEach(function (gallery) {
    var shots = gallery.querySelector('.shots');
    var prev = gallery.querySelector('[data-rail="prev"]');
    var next = gallery.querySelector('[data-rail="next"]');
    if (!shots) return;

    function step() {
      var fig = shots.querySelector('figure');
      if (!fig) return shots.clientWidth;
      var gap = parseFloat(getComputedStyle(shots).columnGap) || 0;
      return fig.getBoundingClientRect().width + gap;
    }

    function update() {
      var max = shots.scrollWidth - shots.clientWidth;
      var x = shots.scrollLeft;
      var atStart = x <= 1;
      var atEnd = x >= max - 1;
      shots.dataset.pos = max <= 1 ? 'none' : atStart ? 'start' : atEnd ? 'end' : 'middle';
      if (prev) prev.disabled = atStart;
      if (next) next.disabled = atEnd;
      gallery.classList.toggle('gallery-inert', max <= 1);
    }

    function nudge(dir) {
      shots.scrollBy({ left: dir * step(), behavior: reduce.matches ? 'auto' : 'smooth' });
    }

    [[prev, -1], [next, 1]].forEach(function (pair) {
      if (!pair[0]) return;
      pair[0].hidden = false;
      pair[0].addEventListener('click', function () { nudge(pair[1]); });
    });

    shots.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
})();
