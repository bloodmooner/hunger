var slider = tns({
    container: '.gallery__wrapper',
    items: 4,
    slideBy: 1,
    autoplay: true,
    nav: false,
    autoplayTimeout: 4000,
    speed: 500,
    mouseDrag: true,
    controls: false,
    responsive: {
        320: {
          items: 1
        },
        600: {
          items: 2
        },
        900: {
          items: 3
        },
        1200: {
            items: 4
        }
      }
  });