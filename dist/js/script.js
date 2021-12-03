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


const tabs = document.querySelector(".menu__container");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}