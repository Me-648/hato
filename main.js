'use strict';

ScrollReveal({ 
  reset: false,
  distance: "60px",
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.section-title, .section-sub-title', { delay: 200, origin: "left" });
ScrollReveal().reveal('.text-box', { delay: 600, origin: "bottom" });
ScrollReveal().reveal('.img-box, .news dl, table, form, .text', { delay: 500, origin: "right" });
ScrollReveal().reveal('.service-content .img-content', {
  delay: 500,
  origin: "bottom",
  interval: 200
});