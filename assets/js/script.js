document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  const updateCarousel = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  };

  const goToNext = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  };

  const goToPrev = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  };

  nextBtn.addEventListener("click", goToNext);
  prevBtn.addEventListener("click", goToPrev);
  window.addEventListener("resize", updateCarousel);

  // Auto-slide (opcional)
  // setInterval(goToNext, 5000);

  updateCarousel();
});
