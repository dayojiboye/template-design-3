const lazyLoad = (element) => {
  const preloadImage = (img) => {
    const src = img.getAttribute('data-src');
    if (!src) {
      return;
    }

    img.src = src;
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            preloadImage(entry.target.querySelector('[data-src]'));

            io.POLL_INTERVAL = 100;
            io.unobserve(entry.target);
            // console.log('entered');
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -150px 0px',
      }
    );

    io.observe(element);
  } else {
    const images = document.querySelectorAll('[data-src]');

    images.forEach((img) => {
      img.src = img.dataset.src;
    });
  }
};

export default lazyLoad;
