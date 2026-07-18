(function () {
  var tabs = document.querySelectorAll('[data-tab]');
  var panels = document.querySelectorAll('[data-panel]');
  if (!tabs.length || !panels.length) return;

  function activate(key) {
    tabs.forEach(function (tab) {
      var isActive = tab.getAttribute('data-tab') === key;
      tab.classList.toggle('gh-tab-active', isActive);
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.getAttribute('data-panel') !== key;
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      activate(tab.getAttribute('data-tab'));
    });
  });
})();
