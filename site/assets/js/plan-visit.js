(function () {
  var slider = document.querySelector('[data-nights-slider]');
  var output = document.querySelector('[data-nights-value]');
  if (!slider || !output) return;

  function render() {
    var n = slider.value;
    output.textContent = n + (n === '1' ? ' night' : ' nights');
  }

  slider.addEventListener('input', render);
  render();
})();
