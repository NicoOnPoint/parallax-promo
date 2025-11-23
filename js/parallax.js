document.addEventListener('DOMContentLoaded', () => {
  // Alleen elementen binnen de contact-sectie
  const speedEls = document.querySelectorAll('.contact-cta [data-speed]');

  if (!speedEls.length) return;

  function handleScroll() {
    // ✅ Parallax UIT op kleine schermen (bijv. <= 768px)
    if (window.innerWidth <= 768) {
      // transforms weer resetten zodat alles netjes staat
      speedEls.forEach(el => {
        el.style.transform = '';
        el.style.willChange = '';
      });
      return;
    }

    // ✅ Parallax AAN op grotere schermen
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    speedEls.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 0;
      const translateY = (scrollY * speed) / 100;

      el.style.transform = `translateY(${translateY}px)`;
      el.style.willChange = 'transform';
    });
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll); // bij draaien mobiel / resize
  handleScroll(); // meteen 1x uitvoeren bij laden
});
