(function () {
  var QUOTES = [
    { text: "The blue of Voroneț is unlike any colour I've seen elsewhere — it feels less painted than grown into the wall itself.", attribution: 'A visitor, autumn 2025' },
    { text: 'We came for the frescoes and stayed for the quiet — the kind of quiet that has a fire crackling somewhere just out of sight.', attribution: 'A visitor, winter 2025' },
    { text: 'Nobody told us the hills would still be dancing after the monasteries close for the evening.', attribution: 'A visitor, summer 2025' }
  ];

  var LIVING_HEADINGS = [
    'Bucovina keeps its rhythm in colour',
    'Bucovina keeps its rhythm in song',
    'Bucovina keeps its rhythm on the trail',
    'Bucovina keeps its rhythm at the table'
  ];

  var quoteIndex = 0;
  var headingIndex = 0;

  var quoteText = document.querySelector('[data-quote-text]');
  var quoteAttribution = document.querySelector('[data-quote-attribution]');
  var dotsContainer = document.querySelector('[data-quote-dots]');
  var prevBtn = document.querySelector('[data-quote-prev]');
  var nextBtn = document.querySelector('[data-quote-next]');
  var livingHeading = document.querySelector('[data-living-heading]');

  function renderQuote() {
    if (!quoteText) return;
    var q = QUOTES[quoteIndex];
    quoteText.textContent = q.text;
    quoteAttribution.textContent = q.attribution;
    if (dotsContainer) {
      var dots = dotsContainer.querySelectorAll('.gh-dot');
      dots.forEach(function (dot, i) {
        dot.classList.toggle('gh-dot-active', i === quoteIndex);
      });
    }
  }

  function goTo(i) {
    quoteIndex = (i + QUOTES.length) % QUOTES.length;
    renderQuote();
  }

  if (quoteText && dotsContainer) {
    QUOTES.forEach(function (q, i) {
      var dot = document.createElement('button');
      dot.className = 'gh-dot' + (i === 0 ? ' gh-dot-active' : '');
      dot.setAttribute('aria-label', 'Show quote ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsContainer.appendChild(dot);
    });
    renderQuote();

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(quoteIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(quoteIndex + 1); });
  }

  if (livingHeading) {
    setInterval(function () {
      headingIndex = (headingIndex + 1) % LIVING_HEADINGS.length;
      livingHeading.textContent = LIVING_HEADINGS[headingIndex];
    }, 3200);
  }
})();
