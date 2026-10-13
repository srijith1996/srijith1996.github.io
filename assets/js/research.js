// Keep section navigation in sync with the part of the homepage in view.
const sections = document.querySelectorAll('main section[id], main aside[id]');
if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('nav a').forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
