const carousel = document.querySelector('.carousel');

carousel.addEventListener('wheel', (event) => {
  event.preventDefault();
  carousel.scrollLeft += event.deltaX;
});

function scrollCarousel(scrollAmount) {
  const carousel = document.querySelector('.carousel');
  carousel.scrollLeft += scrollAmount;
}
