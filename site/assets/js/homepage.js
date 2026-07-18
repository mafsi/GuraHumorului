(function () {
  var dataScript = document.getElementById('quotes-data');
  if (!dataScript) return;
  var data = JSON.parse(dataScript.textContent);
  var QUOTES = data.quotes;
  var LIVING_HEADINGS = data.headings;

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

  if (livingHeading && LIVING_HEADINGS && LIVING_HEADINGS.length) {
    setInterval(function () {
      headingIndex = (headingIndex + 1) % LIVING_HEADINGS.length;
      livingHeading.textContent = LIVING_HEADINGS[headingIndex];
    }, 3200);
  }
})();
