(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const navHeader = document.querySelector(".header");
    const sticky = navHeader.offsetTop;
    const logo = document.querySelector(".nav-logo img");

    if (window.pageYOffset > sticky) {
      navHeader.classList.add("sticky");
    } else {
      navHeader.classList.remove("sticky");
    }

    // === logo change
    if ( navHeader.classList.contains("sticky")) {
      logo.src = "assets/images/logo/logo_light.svg";
    } else {
      logo.src = "assets/images/logo/logo_dark.svg";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };
})();
