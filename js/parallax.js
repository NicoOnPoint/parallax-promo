document.addEventListener('DOMContentLoaded', () => {
  // Alleen elementen binnen de contact-sectie
  const speedEls = document.querySelectorAll('.contact-cta [data-speed]');

  if (!speedEls.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    speedEls.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 0;
      const translateY = (scrollY * speed) / 100;

      // LET OP: dit overschrijft alleen transform van deze elementen
      el.style.transform = `translateY(${translateY}px)`;
      el.style.willChange = 'transform';
    });
  });
});
