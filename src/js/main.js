(function () {
  "use strict";

  // Single source of truth for the KurumaWorks booking link.
  var KURUMA_URL = "https://kurumaworks.com/mechanics/nc/durham/os-cars-auto-repair";

  document.querySelectorAll(".js-kuruma-link").forEach(function (el) {
    el.setAttribute("href", KURUMA_URL);
  });

  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
