document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");
  let currentIndex = 0;
  let slideInterval;

  // Buat titik indikator sesuai jumlah slide
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Auto slide tiap 2 detik
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 2000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Pause saat hover biar user bisa baca
  document.querySelector(".slider").addEventListener("mouseenter", stopAutoSlide);
  document.querySelector(".slider").addEventListener("mouseleave", startAutoSlide);

  startAutoSlide();
});
