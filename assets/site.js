const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

// Content remains visible and usable without JavaScript or animation support.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const reveal = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section').forEach(section => reveal.observe(section));
}
